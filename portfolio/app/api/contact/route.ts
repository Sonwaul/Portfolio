import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Elliot <contact@elliot-infelta.fr>",
      to: "infeltaelliot@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #1a4a6a; border-bottom: 2px solid #a8d4ec; padding-bottom: 0.75rem;">
            Nouveau message depuis ton portfolio
          </h2>
          <table style="width: 100%; margin: 1.5rem 0;">
            <tr>
              <td style="padding: 6px 0; font-weight: 600; color: #555; width: 80px;">De :</td>
              <td style="padding: 6px 0;">${name} &lt;${email}&gt;</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: 600; color: #555;">Objet :</td>
              <td style="padding: 6px 0;">${subject}</td>
            </tr>
          </table>
          <div style="background: #f4f8fb; border-left: 3px solid #6aaacb; border-radius: 4px; padding: 1.25rem 1.5rem; margin-top: 0.5rem;">
            <p style="white-space: pre-wrap; line-height: 1.7; margin: 0;">${message}</p>
          </div>
          <p style="color: #aaa; font-size: 0.8rem; margin-top: 2rem; border-top: 1px solid #eee; padding-top: 1rem;">
            Envoyé via le formulaire de contact · elliot-infelta.fr
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 500 });
  }
}
