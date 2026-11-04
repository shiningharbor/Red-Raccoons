import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import type { MediaItem } from "../../lib/content";

export const revalidate = 3600;

export async function GET() {
  const { NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: cloudName, CLOUDINARY_API_KEY: apiKey, CLOUDINARY_API_SECRET: apiSecret } = process.env;
  if (!cloudName || !apiKey || !apiSecret) return NextResponse.json([]);

  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret, secure: true });

  try {
    const prefix = "Red-Raccoons/Momentos/";
    const [videos, images] = await Promise.all([
      cloudinary.api.resources({ type: "upload", resource_type: "video", prefix, max_results: 100 }),
      cloudinary.api.resources({ type: "upload", resource_type: "image", prefix, max_results: 100 }),
    ]);
    const resources = [
      ...videos.resources.map((f: { public_id: string; secure_url: string }) => ({ ...f, mediaType: "video" as const })),
      ...images.resources.map((f: { public_id: string; secure_url: string }) => ({ ...f, mediaType: "image" as const })),
    ];
    const items: MediaItem[] = resources.map((file, index) => ({
      id: file.public_id,
      type: file.mediaType,
      url: file.secure_url,
      title: `Video ${String(index + 4).padStart(2, "0")}`,
    }));
    return NextResponse.json(items, { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } });
  } catch (error) {
    console.error("No se pudo obtener la galería de Cloudinary", error);
    return NextResponse.json([], { status: 200 });
  }
}
