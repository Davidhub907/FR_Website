"use client";

import { useState } from "react";
import TurnstileWidget from "@/components/TurnstileWidget";

const inputClasses =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

export default function EmploymentForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/employment", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Your application could not be submitted.",
        );
      }

      setStatus("success");
      setMessage(
        "Your application has been submitted. Frontier Restoration will contact you if your experience matches an available position.",
      );

      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error.message ||
          "Something went wrong. Please try submitting the form again.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
    >
      {/* Spam honeypot */}
      <div
        className="absolute top-auto -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="fullName"
            className="text-sm font-bold text-slate-800"
          >
            Full name <span className="text-orange-600">*</span>
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className={inputClasses}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-bold text-slate-800">
            Email address <span className="text-orange-600">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-bold text-slate-800">
            Phone number <span className="text-orange-600">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={40}
            autoComplete="tel"
            className={inputClasses}
            placeholder="(907) 555-1234"
          />
        </div>

        <div>
          <label
            htmlFor="position"
            className="text-sm font-bold text-slate-800"
          >
            Position of interest <span className="text-orange-600">*</span>
          </label>

          <select
            id="position"
            name="position"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Select a position
            </option>
            <option value="Restoration Technician">
              Restoration Technician
            </option>
            <option value="Contents Technician">Contents Technician</option>
            <option value="Office or Administrative">
              Office or Administrative
            </option>
            <option value="General Employment Application">
              General Employment Application
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="availability"
            className="text-sm font-bold text-slate-800"
          >
            Availability <span className="text-orange-600">*</span>
          </label>

          <select
            id="availability"
            name="availability"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Select availability
            </option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Seasonal">Seasonal</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="experience"
            className="text-sm font-bold text-slate-800"
          >
            Relevant work experience
          </label>

          <textarea
            id="experience"
            name="experience"
            rows={5}
            maxLength={3000}
            className={inputClasses}
            placeholder="Tell us about your restoration, construction, cleaning, maintenance, customer service, or other relevant experience."
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-bold text-slate-800">
            Additional information
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={3000}
            className={inputClasses}
            placeholder="Anything else you would like us to know?"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="resume" className="text-sm font-bold text-slate-800">
            Résumé
            <span className="ml-1 font-normal text-slate-500">— optional</span>
          </label>

          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="mt-2 block w-full rounded-lg border border-slate-300 bg-white text-sm text-slate-600 file:mr-4 file:border-0 file:bg-slate-900 file:px-4 file:py-3 file:font-bold file:text-white hover:file:bg-orange-600"
          />

          <p className="mt-2 text-xs text-slate-500">
            PDF, DOC, or DOCX. Maximum file size: 4 MB.
          </p>
        </div>
      </div>

      {message && (
        <div
          role="status"
          className={`mt-6 rounded-lg border p-4 text-sm leading-6 ${
            status === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      <TurnstileWidget action="service_emergency" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-orange-600 px-6 py-4 font-bold text-white uppercase transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting"
          ? "Submitting Application..."
          : "Submit Application"}
      </button>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Do not include sensitive information such as your Social Security
        number, banking information, or medical records.
      </p>
    </form>
  );
}
