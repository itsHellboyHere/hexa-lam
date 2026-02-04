"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the validation schema
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.enum([
    "Architect / Interior Designer",
    "Modular Kitchen Manufacturer",
    "Dealer / Distributor",
    "Individual Homeowner"
  ], { errorMap: () => ({ message: "Please select a valid role" }) }),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9+ ]{10,15}$/, "Invalid phone number"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendInquiry(formData) {
  // Extract values from formData
  const rawData = {
    name: formData.get("name"),
    role: formData.get("role"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    inquiryType: formData.get("inquiryType"),
    timeline: formData.get("timeline"),
    message: formData.get("message"),
  };

  // Validate data using Zod
  const validatedFields = ContactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return { 
      success: false, 
      error: validatedFields.error.flatten().fieldErrors 
    };
  }

  const { name, role, email, phone, inquiryType, timeline, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: "HexaLam Inquiries <onboarding@resend.dev>", // Replace with your verified domain
      to: ["creatormonkstudios@gmail.com"], // Your target email
      subject: `[${inquiryType}] New Inquiry from ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="border-bottom: 2px solid #a08152; padding-bottom: 10px; color: #111;">
            HexaLam Technical Inquiry
          </h2>
          <p><strong>Professional Role:</strong> ${role}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #a08152;">Message Details:</p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <footer style="margin-top: 20px; font-size: 12px; color: #888;">
            Sent via HexaLam Acrylic Laminates.
          </footer>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: "Server error. Please try again later." };
  }
}