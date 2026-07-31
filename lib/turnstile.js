const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const productionHostnames = new Set([
  "frontierrestorationllc.com",
  "www.frontierrestorationllc.com",
]);

export async function verifyTurnstile(token, expectedActions) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("Missing TURNSTILE_SECRET_KEY.");
    return false;
  }

  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return false;
  }

  const actions = Array.isArray(expectedActions)
    ? expectedActions
    : [expectedActions];

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
      }),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error("Turnstile request failed:", response.status);
      return false;
    }

    const result = await response.json();

    if (!result.success) {
      console.warn(
        "Turnstile rejected submission:",
        result["error-codes"] || [],
      );

      return false;
    }

    // Cloudflare's localhost test keys return "test" as the action.
    const actionIsValid =
      actions.includes(result.action) ||
      (process.env.NODE_ENV !== "production" && result.action === "test");

    if (!actionIsValid) {
      console.warn("Turnstile action mismatch:", result.action);
      return false;
    }

    if (
      process.env.NODE_ENV === "production" &&
      !productionHostnames.has(result.hostname)
    ) {
      console.warn("Turnstile hostname mismatch:", result.hostname);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  } finally {
    clearTimeout(timeoutId);
  }
}
