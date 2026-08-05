import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { createContactLead } from "@/lib/data/leads";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_input", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const lead = await createContactLead(parsed.data);

  return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
}
