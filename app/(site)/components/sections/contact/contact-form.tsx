"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

interface ContactFormProps {
  title: string;
  description: string;
  _key: string;
  contactEmail: string; // This is the email address where the form data will be sent.
}

export function contactForm({
  _key,
  title = "Get in touch",
  description = "We'd love to hear from you. Fill out the form below and we'll get back to you shortly.",
  contactEmail,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object with form data and contactEmail
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);
    form.append("contactEmail", contactEmail); // Attach the contactEmail to form data

    const result = await submitContactForm(form);

    if (result.success) {
      setStatusMessage(result.message);
      setErrors({});
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setErrors(result.errors || {});
      setStatusMessage(result.message || "Failed to submit the form.");
    }
  };

  return (
    <section id={_key} className="py-24 px-6 md:px-10 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="tag">Get in Touch</span>
            <h2 className="section-title mt-3 mb-6">{title}</h2>
            <p className="text-foreground/80 mb-8 max-w-md">{description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <p className="text-foreground">contact@simplywriting.net</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit} className="glass p-8 rounded-lg">
              <div className="grid grid-cols-1 gap-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground/80 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/80 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground/80 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
                    required
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground/80 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message[0]}
                    </p>
                  )}
                </div>

                <button type="submit" className="button-primary mt-2">
                  Send Message
                </button>
              </div>
              {statusMessage && (
                <p className="text-center text-purple-500 mt-4 font-semibold">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
