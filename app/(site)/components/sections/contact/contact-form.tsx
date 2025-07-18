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

export function ContactForm({
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
    <section id={_key} className="py-16 px-6 md:px-10 bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
              <p className="text-xl text-foreground/80">{description}</p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-foreground/70 text-sm">
                    <a href={`mailto:${contactEmail || 'contact@simplywriting.net'}`} className="hover:text-primary transition-colors">
                      {contactEmail || 'contact@simplywriting.net'}
                    </a>
                  </p>
                  <p className="text-foreground/60 text-sm mt-1">Response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="font-semibold text-primary mb-2">Quick Response</h3>
              <p className="text-sm text-foreground/80">
                I typically respond to project inquiries within 24 hours. For urgent requests, please mention it in your message.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="bg-muted/30 rounded-lg p-8 border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors"
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
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email[0]}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="Pitch Deck">Pitch Deck / Investor Presentation</option>
                    <option value="Website Copy">Website Copy / Landing Pages</option>
                    <option value="Content Strategy">Content Strategy</option>
                    <option value="Technical Writing">Technical Documentation</option>
                    <option value="Marketing Materials">Marketing Materials</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject[0]}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors resize-none"
                    placeholder="Please describe your project, timeline, and any specific requirements..."
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message[0]}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <button type="submit" className="button-primary w-full md:w-auto">
                    Send Project Inquiry
                  </button>
                </div>
              </div>
              
              {statusMessage && (
                <div className="mt-6 p-4 bg-primary/10 text-primary rounded-lg">
                  <p className="text-sm font-medium">{statusMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
