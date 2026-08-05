export type LeadSource = "contact-form" | "newsletter";

export interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  locale: "en" | "fr";
  source: LeadSource;
  createdAt: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  locale: "en" | "fr";
  createdAt: string;
}
