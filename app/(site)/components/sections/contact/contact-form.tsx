"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/app/actions/contact";
// Define props for the ContactForm component
interface ContactFormProps {
  _key: string; // Define the key prop here
}

export function contactForm({ _key }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = await submitContactForm(form);
    // Handle form submission result here (e.g., update statusMessage or errors)
  };

  return (
    <section
      id={_key}
      className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50"
    >
      <Card className="mx-auto max-w-lg bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-300 to-indigo-400 h-2" />
        <CardHeader className="p-6">
          <CardTitle className="text-3xl font-bold text-indigo-800">
            Get in Touch
          </CardTitle>
          <CardDescription className="text-indigo-600 mt-2">
            We'd love to hear from you. Fill out the form below and we'll get
            back to you shortly.
          </CardDescription>
          {statusMessage && (
            <p className="text-center text-purple-500 mt-4 font-semibold">
              {statusMessage}
            </p>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="first-name"
                  className="text-indigo-600 font-medium"
                >
                  First Name
                </Label>
                <Input
                  id="first-name"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border-indigo-300 focus:ring-purple-400 focus:border-purple-400 rounded-lg"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName[0]}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="last-name"
                  className="text-indigo-600 font-medium"
                >
                  Last Name
                </Label>
                <Input
                  id="last-name"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border-indigo-300 focus:ring-purple-400 focus:border-purple-400 rounded-lg"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName[0]}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-indigo-600 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-indigo-300 focus:ring-purple-400 focus:border-purple-400 rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-indigo-600 font-medium">
                Your Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us what's on your mind..."
                className="min-h-[120px] border-indigo-300 focus:ring-purple-400 focus:border-purple-400 rounded-lg"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message[0]}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-stone-700 text-gray-200 font-semibold py-3 rounded-lg shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 hover:bg-stone-500"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
