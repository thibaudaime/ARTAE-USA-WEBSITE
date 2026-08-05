import "server-only";
import type { NewsletterSubscriber } from "@/lib/types/lead";

/**
 * Placeholder data source. Swap the body of this function for a Prisma/Supabase
 * insert (and/or an ESP API call, e.g. Mailchimp/Resend) later — the exported
 * signature should not need to change.
 */
const subscribers: NewsletterSubscriber[] = [];

export async function subscribeToNewsletter(
  input: Omit<NewsletterSubscriber, "id" | "createdAt">,
): Promise<NewsletterSubscriber> {
  const existing = subscribers.find((s) => s.email === input.email);
  if (existing) return existing;

  const subscriber: NewsletterSubscriber = {
    ...input,
    id: `sub_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  subscribers.push(subscriber);
  console.info("[newsletter] new subscriber", subscriber);
  return subscriber;
}
