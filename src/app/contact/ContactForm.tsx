"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-1 block w-full rounded-md border border-brand-gray-mid px-3 py-2 text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent";
const labelClass = "block text-sm font-semibold text-brand-navy";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      service: formData.get("service")?.toString(),
      city: formData.get("city")?.toString(),
      message: formData.get("message")?.toString().trim(),
    };

    if (!payload.name || !payload.phone) {
      setStatus("error");
      setErrorMessage("Name and phone are required.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-brand-accent bg-brand-gray-light p-6 text-brand-navy">
        <p className="font-semibold">Thanks — your message was sent.</p>
        <p className="mt-2 text-sm text-brand-gray">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-brand-accent">*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-brand-accent">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelClass}>
            Service
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <select id="city" name="city" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select your city
            </option>
            {cities.map((city) => (
              <option key={city.slug} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea id="message" name="message" rows={5} className={inputClass} />
      </div>

      {status === "error" && (
        <p className="text-sm font-semibold text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
