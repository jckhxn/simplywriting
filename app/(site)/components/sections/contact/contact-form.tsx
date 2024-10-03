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

export function contactForm() {
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
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
      <Card className="mx-auto max-w-md bg-white shadow-lg rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-indigo-900">Contact Us</CardTitle>
          <CardDescription className="text-indigo-700">
            Fill out the form below, and we'll get back to you as soon as
            possible.
          </CardDescription>
          {statusMessage && (
            <p className="text-center text-green-600 mt-4">{statusMessage}</p>
          )}
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-indigo-700">
                  First Name
                </Label>
                <Input
                  id="first-name"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-indigo-700">
                  Last Name
                </Label>
                <Input
                  id="last-name"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName[0]}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-indigo-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-indigo-700">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="min-h-[100px] border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message[0]}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
