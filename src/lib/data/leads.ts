import "server-only";
import type { ContactLead } from "@/lib/types/lead";

/**
 * Placeholder data source. Swap the body of this function for a Prisma/Supabase
 * insert (and/or a CRM webhook call) later — the exported signature should not
 * need to change.
 */
const leads: ContactLead[] = [];

export async function createContactLead(
  input: Omit<ContactLead, "id" | "createdAt" | "source">,
): Promise<ContactLead> {
  const lead: ContactLead = {
    ...input,
    id: `lead_${Date.now()}`,
    source: "contact-form",
    createdAt: new Date().toISOString(),
  };
  leads.push(lead);
  console.info("[leads] new contact lead received", lead);
  return lead;
}
