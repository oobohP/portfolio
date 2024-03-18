import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { blogTitle, blogExcerpt, slug } = await req.json(); // Expecting data in the request body

    const response = await resend.contacts.list({ audienceId: process.env.RESEND_AUDIENCE_ID || '' });
    if (!response.data || !response.data.data) {
      console.error('No Contacts found in audiences', response)
      return new Response(JSON.stringify({ error: 'No contacts found' }), { status: 404 });
    }

    const contacts = response.data.data;

    const emailsToSend = contacts.map(contact => {
      const emailContent = EmailTemplate({
        firstName: contact.email || 'Subscriber',
        blogTitle: blogTitle,
        blogExcerpt: blogExcerpt,
        blogUrl: `https://stevenly.dev/blog/${slug}`
      });

      return {
        from: 'Steven <sly@stevenly.dev>',
        to: contact.email,
        subject: `New Blog Post: ${blogTitle}`,
        react: emailContent || '',
      };
    });

    await resend.batch.send(emailsToSend);
    return new Response(JSON.stringify({ message: 'Emails sent' }), { status: 200 });
  } catch (error) {
    console.error('Error sending emails', error);
    return new Response(JSON.stringify({ error: 'Error processing request' }), { status: 500 });
  }
}