import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.string().trim().email(),
  locale: z.enum(["en", "fr"]),
});

export type NewsletterFormInput = z.infer<typeof newsletterFormSchema>;
