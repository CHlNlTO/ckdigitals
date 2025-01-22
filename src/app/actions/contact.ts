"use server";

import { z } from "zod";
import { ContactFormData } from "@/lib/types";
import { sendEmail } from "@/lib/email";

const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the input
    const validatedData = contactSchema.parse(data);

    // Send email
    const result = await sendEmail(validatedData);

    return result;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed: " + error.errors[0].message,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
