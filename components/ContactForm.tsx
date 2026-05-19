"use client";

import { useState, FormEvent, useRef } from "react";
import { CheckCircle2, AlertCircle, Upload, X } from "lucide-react";

// Full service checklist matching the original website
const serviceGroups = [
  {
    group: "Foundations",
    services: [
      "Foundation Repair",
      "Foundation Installation",
      "Concrete Basements",
      "Piers / Pier Blocks",
    ],
  },
  {
    group: "Flat Concrete Work",
    services: [
      "Patio",
      "Driveway",
      "Walkway",
      "Concrete Sidewalks",
      "Flat Concrete (general)",
      "Concrete Replacement",
    ],
  },
  {
    group: "Retaining Walls",
    services: ["Retaining Walls"],
  },
  {
    group: "Commercial Concrete",
    services: [
      "Commercial Concrete (general)",
      "Parking Lots",
      "Parking Decks",
      "Road Paving",
      "Road Gutter Concrete",
      "Concrete Curbs",
      "Public Work Projects",
      "Apartment Complex Concrete",
      "New Construction Concrete",
    ],
  },
  {
    group: "Masonry Services",
    services: [
      "Masonry Services (general)",
      "Stone Work",
      "Chimney",
      "Fireplaces",
      "Mailboxes",
      "Custom Stairways",
      "Pool Concrete",
    ],
  },
  {
    group: "Asphalt Services",
    services: [
      "Asphalt Overlay",
      "New Asphalt",
      "Asphalt Slurry Sealer",
      "Parking Striping",
    ],
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  services: string[];
  message: string;
}

const emptyForm: FormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  address2: "",
  city: "",
  state: "CA",
  zip: "",
  country: "United States",
  services: [],
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const newFiles = Array.from(incoming).filter(
      (f) => f.size <= 10 * 1024 * 1024 // 10 MB limit
    );
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate network request — no backend needed yet
    setTimeout(() => {
      // Simulate success 95% of the time for demo
      setStatus("success");
    }, 1400);
  };

  if (status === "success") {
    return (
      <div className="bg-concrete-dark border border-amber-brand/30 p-10 text-center flex flex-col items-center gap-4">
        <CheckCircle2 size={52} className="text-amber-brand" />
        <h3 className="font-display text-3xl text-concrete-offwhite tracking-wide">
          MESSAGE SENT!
        </h3>
        <p className="text-concrete-gray max-w-md">
          Thank you for contacting us. We will get back to you as soon as
          possible. If it&apos;s urgent, call us directly at{" "}
          <a href="tel:4086908051" className="text-amber-brand hover:underline">
            (408) 690-8051
          </a>
          .
        </p>
        <button
          onClick={() => {
            setForm(emptyForm);
            setFiles([]);
            setStatus("idle");
          }}
          className="mt-4 text-sm text-concrete-gray hover:text-amber-brand transition-colors underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="bg-concrete-dark border border-red-500/30 p-10 text-center flex flex-col items-center gap-4">
        <AlertCircle size={52} className="text-red-400" />
        <h3 className="font-display text-3xl text-concrete-offwhite tracking-wide">
          SOMETHING WENT WRONG
        </h3>
        <p className="text-concrete-gray max-w-md">
          Oops, there was an error sending your message. Please try again later,
          or call us directly at{" "}
          <a href="tel:4086908051" className="text-amber-brand hover:underline">
            (408) 690-8051
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 btn-amber"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">First Name *</label>
          <input
            type="text"
            name="firstName"
            required
            value={form.firstName}
            onChange={handleChange}
            placeholder="Alex"
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Last Name *</label>
          <input
            type="text"
            name="lastName"
            required
            value={form.lastName}
            onChange={handleChange}
            placeholder="Johnson"
            className="form-input"
          />
        </div>
      </div>

      {/* Contact Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(408) 555-0100"
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="alex@example.com"
            className="form-input"
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="form-label">Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="123 Oak Street"
          className="form-input"
        />
      </div>
      <div>
        <label className="form-label">Address Line 2</label>
        <input
          type="text"
          name="address2"
          value={form.address2}
          onChange={handleChange}
          placeholder="Apt, suite, unit (optional)"
          className="form-input"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="col-span-2">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="San Jose"
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">State</label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="CA"
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            placeholder="95127"
            className="form-input"
          />
        </div>
      </div>
      <div>
        <label className="form-label">Country</label>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="United States"
          className="form-input"
        />
      </div>

      {/* Services */}
      <div>
        <label className="form-label">Services Interested In</label>
        <div className="space-y-5 mt-3">
          {serviceGroups.map((group) => (
            <div key={group.group}>
              <p className="text-xs text-amber-brand font-display tracking-widest uppercase mb-2">
                {group.group}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {group.services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={form.services.includes(service)}
                      onChange={() => handleCheckbox(service)}
                      className="hidden"
                    />
                    <span
                      className={`w-4 h-4 flex-shrink-0 border flex items-center justify-center transition-colors ${
                        form.services.includes(service)
                          ? "bg-amber-brand border-amber-brand"
                          : "border-concrete-charcoal group-hover:border-amber-brand"
                      }`}
                    >
                      {form.services.includes(service) && (
                        <svg
                          className="w-2.5 h-2.5 text-concrete-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-concrete-light group-hover:text-concrete-offwhite transition-colors">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="form-label">Let us know what you need! *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your project — size, location, timeline, any specific requirements..."
          className="form-input resize-none"
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="form-label">Attach Files (optional)</label>
        <div
          className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors ${
            dragOver
              ? "border-amber-brand bg-amber-brand/5"
              : "border-concrete-charcoal hover:border-amber-brand/50"
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload size={28} className="text-concrete-gray mx-auto mb-2" />
          <p className="text-sm text-concrete-gray">
            Drag &amp; drop files here, or{" "}
            <span className="text-amber-brand underline">browse</span>
          </p>
          <p className="text-xs text-concrete-gray/60 mt-1">
            Photos, PDFs, plans — max 10 MB each
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-concrete-dark px-4 py-2"
              >
                <span className="text-sm text-concrete-light truncate max-w-[80%]">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-concrete-gray hover:text-amber-brand transition-colors ml-2 flex-shrink-0"
                  aria-label="Remove file"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-amber w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send My Request"
        )}
      </button>

      <p className="text-xs text-concrete-gray">
        * Required fields. We&apos;ll respond within 24 hours with your free
        estimate.
      </p>
    </form>
  );
}
