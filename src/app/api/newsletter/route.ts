import { NextResponse } from "next/server";
import { newsletterFormSchema } from "@/lib/validation/newsletter";
import { subscribeToNewsletter } from "@/lib/data/newsletter";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_input", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const subscriber = await subscribeToNewsletter(parsed.data);

  return NextResponse.json({ ok: true, id: subscriber.id }, { status: 201 });
}
