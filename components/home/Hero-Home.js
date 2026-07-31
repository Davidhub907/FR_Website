"use client";

import TurnstileWidget from "../TurnstileWidget";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useState } from "react";

const heroStats = [
  {
    value: "24/7",
    label: "Emergency Response",
  },
  {
    value: "60 MIN",
    label: "On site",
  },
  {
    value: "20+",
    label: "Restorations",
  },
  {
    value: "IICRC",
    label: "Certified",
  },
];

export default function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  async function handleEmergencySubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setFormStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "The request could not be sent.");
      }

      form.reset();

      setFormStatus({
        type: "success",
        message:
          "Your request was sent. A member of our team will contact you as soon as possible.",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please call us for immediate assistance.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#111111]">
      {/* Background image */}
      <Image
        src="/images/background/Fairbanks-image.jpg"
        alt="Frontier Restoration serving homes and businesses in Fairbanks, Alaska"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Background overlays */}

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/20 to-black/45" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* Left hero content */}
        <div className="text-white">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase sm:text-sm">
              24/7 Emergency Restoration · Fairbanks, Alaska
            </p>

            <div className="mt-3 h-[2px] w-24 bg-orange-500" />
          </div>

          <h1 className="max-w-3xl text-5xl leading-[0.92] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-7xl">
            <span className="block">Fairbanks&apos;</span>
            <span className="block">Emergency</span>
            <span className="block text-orange-500">Restoration Team.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            Water, fire, smoke, mold, and sewage damage can quickly spread
            through a property. Frontier Restoration provides{" "}
            <span className="font-bold text-white">
              professional cleanup, drying, remediation, contents recovery, and
              restoration services{" "}
            </span>
            for homes and businesses throughout the Fairbanks area.
          </p>

          <a
            href={siteConfig.phone.href}
            className="mt-8 inline-flex items-center gap-3 rounded-md border border-white/40 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:border-orange-500 hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
            </svg>
            Call {siteConfig.phone.display}
          </a>

          {/* Trust statistics */}
          <div className="mt-12 border-t border-white/20 pt-8">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`}>
                  <p className="text-2xl font-extrabold text-orange-500 lg:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs font-bold tracking-wide text-gray-300 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency service form */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="h-1.5 bg-orange-500" />

            <form onSubmit={handleEmergencySubmit} className="p-7 sm:p-10">
              <input
                type="hidden"
                name="requestType"
                value="Emergency restoration"
              />

              {/* Honeypot for bots */}
              <div
                className="absolute top-auto -left-[9999px] h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="home-hero-website">Website</label>
                <input
                  id="home-hero-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.18em] text-orange-600 uppercase">
                  Fast Local Response
                </p>

                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
                  Request Emergency Service
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  Tell us what happened and a member of our team will contact
                  you as soon as possible.
                </p>
              </div>
              <div className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="home-hero-name"
                    className="mb-2 block text-sm font-bold text-[#1A1A1A]"
                  >
                    Name <span className="text-orange-600">*</span>
                  </label>

                  <input
                    id="home-hero-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Full name"
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3.5 text-[#1A1A1A] transition outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* Phone and ZIP */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="home-hero-phone"
                      className="mb-2 block text-sm font-bold text-[#1A1A1A]"
                    >
                      Phone <span className="text-orange-600">*</span>
                    </label>

                    <input
                      id="home-hero-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      placeholder="(907) 555-0123"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3.5 text-[#1A1A1A] transition outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-hero-zip"
                      className="mb-2 block text-sm font-bold text-[#1A1A1A]"
                    >
                      ZIP code
                    </label>

                    <input
                      id="home-hero-zip"
                      name="zip"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      placeholder="99701"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3.5 text-[#1A1A1A] transition outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="home-hero-email"
                    className="mb-2 block text-sm font-bold text-[#1A1A1A]"
                  >
                    Email{" "}
                    <span className="font-normal text-gray-500">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="home-hero-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3.5 text-[#1A1A1A] transition outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="home-hero-service"
                    className="mb-2 block text-sm font-bold text-[#1A1A1A]"
                  >
                    Service needed
                  </label>

                  <select
                    id="home-hero-service"
                    name="service"
                    defaultValue=""
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3.5 text-[#1A1A1A] transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Water damage">Water damage</option>
                    <option value="Fire and smoke damage">
                      Fire and smoke damage
                    </option>
                    <option value="Mold remediation">Mold remediation</option>
                    <option value="Sewer backup">Sewer backup</option>
                    <option value="Content restoration">
                      Content restoration
                    </option>

                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Damage description */}
                <div>
                  <label
                    htmlFor="home-hero-description"
                    className="mb-2 block text-sm font-bold text-[#1A1A1A]"
                  >
                    What happened?
                  </label>

                  <textarea
                    id="home-hero-description"
                    name="damage"
                    rows={4}
                    placeholder="Briefly describe the damage..."
                    className="w-full resize-none rounded-md border border-gray-300 bg-gray-50 px-4 py-3.5 text-[#1A1A1A] transition outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <TurnstileWidget action="home_emergency" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-sm font-extrabold tracking-wide text-white uppercase transition hover:bg-orange-600 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Sending Request..."
                  : "Request Emergency Service"}

                {!isSubmitting && (
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                )}
              </button>
              {formStatus.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 rounded-md px-4 py-3 text-center text-sm font-medium ${
                    formStatus.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
              <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                Your information is kept private and is only used to respond to
                your service request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
