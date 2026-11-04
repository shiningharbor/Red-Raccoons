
import { NextResponse } from "next/server";

export const revalidate = 1800;

type RawPost = {
  id?: unknown;
  permalink?: unknown;
};

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ posts: [] });
  }

  const url = new URL(
    "https://graph.instagram.com/v26.0/me/media"
  );

  url.searchParams.set(
    "fields",
    "id,permalink,media_type,timestamp"
  );
  url.searchParams.set("limit", "30");

  try {
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error(`Instagram API: ${response.status}`);
    }

    const data = (await response.json()) as {
      data?: RawPost[];
    };

    const posts = (Array.isArray(data.data) ? data.data : [])
      .filter(
        (post) =>
          typeof post.id === "string" &&
          typeof post.permalink === "string" &&
          /^https:\/\/(?:www\.)?instagram\.com\/(p|reel|tv)\/[A-Za-z0-9_-]+/.test(
            post.permalink
          )
      )
      .map((post) => ({
        id: post.id as string,
        permalink: post.permalink as string,
      }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Instagram:", error);

    return NextResponse.json(
      { posts: [], error: "No se pudo cargar Instagram" },
      { status: 502 }
    );
  }
}
