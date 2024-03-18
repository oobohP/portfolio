
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const response = await resend.contacts.list({ audienceId: process.env.RESEND_AUDIENCE_ID || '' });

    if (!response.data.data) {
      console.error('No Contacts found in audiences', response)
      return Response.json({ error: 'No contacts found' });
    }

    const contacts = response.data?.data;

    // Map each contact to an email template object
    const emailsToSend = contacts.map(contact => {
      return {
        from: 'Steven <sly@stevenly.dev>',
        to: contact.email,
        subject: 'Test Email Batch 2',
        react: EmailTemplate({ firstName: contact.email, blogTitle: 'Hello World', blogExcerpt: 'This is a test email', blogUrl: 'https://resend.dev' })
      };
    });

    const data = await resend.batch.send(emailsToSend);
    return new Response('Emails sent', { status: 200 });
  } catch (error) {
    console.error('Error sending emails', error);
    return new Response(JSON.stringify({ error: 'Error processing request' }), { status: 500 });
  }
}
