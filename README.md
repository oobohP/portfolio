## Development Portfolio Blog application built on NextJS
My Development Portfolio that utilizes a Headless CMS for content, and an Email subscription service for new Technical Blogs that are added to the CMS. <br>
Here you can take a peek at how I handle on demand **Cache Revalidation**, **Incremental Site Regeneration**, and other development techniques that you can find useful.

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Embedded Sanity CMS

### This portfolio uses [Sanity.io's Content Management System](https://www.sanity.io/) to access this part in the portfolio you will need three environment variables (see example env file)<br>
- Your [Sanity Project ID](https://www.sanity.io/manage) after you have created an account logged in and created a project <br>
- Your Dataset Title which can also be found on the same dashboard as your Sanity Project ID.
- Your Sanity Webhook key which is also found in your Sanity's Project Dashboard

## Resend Email Client
### This Portfolio utilizes an email service [Resend](https://resend.com/) which is a wrapper on AWS's SES to send out emails whenever a new Blog has been posted for subscribed users (see example env file)<br>
- Your Resend [API Key](https://resend.com/api-keys) which can be found here after you create an account.
- Your Resend [AudienceID](https://resend.com/audiences/)

## Socials
If you would like to connect please feel to reach out to me on Linkedin
- [Linkedin](https://www.linkedin.com/in/sly-dev/)

## NextJS
If you interested in learning more about how NextJS applications are built you can find more here:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
