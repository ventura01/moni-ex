import { NextResponse } from "next/server";
import ContactEmail from "@/app/emails/ContactEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {firstName, lastName} = await request.json()
  try {
    const data = await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: "rventu@gmail.com",
      subject: "Bienvenido a MONI App",
      react: ContactEmail({ firstName, lastName }), //({ firstName: "John", product: "Resend" })
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
