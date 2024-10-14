"use server";

import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define a schema for input validation
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export async function submitContactForm(formData: FormData) {
  // Extract form fields
  const formFields = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
    contactEmail: formData.get("contactEmail"),
  };

  // Remove non-ASCII characters from contactEmail
  // Why Sanity CMS does this I have no idea.
  const sanitizedContactEmail = formFields.contactEmail
    ? (formFields.contactEmail as string).replace(/[^\x00-\x7F]/g, "")
    : "";

  // Validate the input
  const validatedFields = schema.safeParse(formFields);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, message } = validatedFields.data;
  console.log(sanitizedContactEmail);

  try {
    const { data, error } = await resend.emails.send({
      from: "SimplyWriting.net <donotreply@simplywriting.net>",
      to: sanitizedContactEmail,
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error("Email sending error:", error);
      return { success: false, message: "Failed to send email" };
    }

    return { success: true, message: "Form submitted successfully!" };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: "An error occurred while processing your request",
    };
  }
}
