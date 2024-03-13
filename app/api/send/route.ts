
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['testing@resend.dev'],
      subject: 'Test Email',
      react: EmailTemplate({ firstName: 'Steven', blogTitle: 'Hello World', blogExcerpt: 'This is a test email', blogUrl: 'https://resend.dev'}),
    });

    console.log('email sent')
    return Response.json(data);
  } catch (error) {
    console.error('error', error);
    return Response.json({ error });
  }
}