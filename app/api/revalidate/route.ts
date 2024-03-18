import { revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { type NextRequest, NextResponse } from "next/server";

interface WebhookBody {
  _type: string;
  slug: {
      _type: 'slug';
      current: string;
  };
  title: string;
  subtitle: string;
  mainImage?: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
}

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<WebhookBody>(req, process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type || !body.slug?.current || !body.subtitle || !body.mainImage) {
      return new Response("Bad Request", { status: 400 });
    }

    revalidateTag(body._type);

    const blogData = {
      blogTitle: body.title,
      blogExcerpt: body.subtitle,
      slug: body.slug.current,
      mainImage: body.mainImage
    };

    await fetch('https://development-portfolio-git-feature-add-email-on-sanity-phobo.vercel.app/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogData)
    });

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
