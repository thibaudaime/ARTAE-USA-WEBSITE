import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  locale: z.enum(["en", "fr"]),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
