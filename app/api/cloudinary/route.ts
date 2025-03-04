import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const { resources } = await cloudinary.api.resources({
      type: "upload",
      prefix: "media-explorer/Red-Raccoons/Momentos",
      max_results: 20,
    });

    const media = resources.map((file: { secure_url: string; resource_type: string }) => ({
      url: file.secure_url,
      type: file.resource_type,
    }));

    return NextResponse.json(media);
  } catch (error) {
    console.error("Error fetching media from Cloudinary:", error);
    return NextResponse.json({ error: "Error fetching media" }, { status: 500 });
  }
}