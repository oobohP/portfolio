
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const response = await request.json();
  const email = response.email

  if (!process.env.RESEND_AUDIENCE_ID) { throw new Error('No audience ID found') }

  try {
    resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID
    });
  } catch (error) {
    console.error('error', error);
    return Response.json({ error });
  }

  return Response.json(200);
}