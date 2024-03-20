import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
  blogTitle: string;
  blogExcerpt: string;
  slug: string;
  mainImage: string;
}

export async function sendEmail({ blogTitle, blogExcerpt, slug, mainImage }: EmailParams) {
  const response = await resend.contacts.list({ audienceId: process.env.RESEND_AUDIENCE_ID || '' });

  if (!response.data || !response.data.data) {
    throw new Error('No contacts found');
  }
  const contacts = response.data.data;

  const emailsToSend = contacts.map(contact => {
    const emailContent = EmailTemplate({
      firstName: contact.email || 'Subscriber',
      blogTitle,
      blogExcerpt,
      blogUrl: `https://stevenly.dev/blog/${slug}`,
      mainImage
    });

    return {
      from: 'Steven <sly@stevenly.dev>',
      to: contact.email,
      subject: `New Blog Post: ${blogTitle}`,
      react: emailContent || '',
    };
  });

  await resend.batch.send(emailsToSend);
}
