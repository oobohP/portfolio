import { revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<SanityWebhookBody>(req, process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    revalidateTag(body._type);

    if (body.subtitle && body.mainImage) {
      const blogData = {
        blogTitle: body.title,
        blogExcerpt: body.subtitle,
        slug: body.slug.current,
        mainImage: body.mainImage
      };

      await fetch('https://staging.stevenly.dev/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogData)
      });
    }

    console.log(body)
    console.log('Revalidated', body._type, 'and email sent at', Date.now());
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
