import { revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { type NextRequest, NextResponse } from "next/server";

// Define the expected structure of the body and resultBody
interface WebhookBody {
    _type: string;
    slug?: string;
    resultBody?: {
        title: string;
        subtitle: string;
        slug: {
            current: string;
        };
    };
}

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<WebhookBody>(req, process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    if (!body.resultBody) {
      console.error('resultBody is missing in the webhook payload');
      return new Response("Bad Request", { status: 400 });
    }

    const { title, subtitle, slug } = body.resultBody;

    revalidateTag(body._type);

    const blogData = {
      blogTitle: title,
      blogExcerpt: subtitle,
      slug: slug?.current
    };

    await fetch('https://staging.stevenly.dev/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogData)
    });

    console.log('Revalidated', body._type, 'at', Date.now());
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
