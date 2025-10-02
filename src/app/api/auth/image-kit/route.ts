"use server";

import { getUploadAuthParams } from "@imagekit/next/server";
import { NextRequest, NextResponse } from "next/server";

const privateKey = process.env.IMAGEKIT_PRIVATE_KEY as string;
const publicKey = process.env.IMAGEKIT_PUBLIC_KEY as string;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT as string;

export async function GET() {
  try {
    const { token, expire, signature } = getUploadAuthParams({
      privateKey,
      publicKey,
      // expire: 30 * 60, // Optional, controls the expiry time of the token in seconds, maximum 1 hour in the future
      // token: "random-token", // Optional, a unique token for request
    });

    return NextResponse.json(
      {
        token,
        expire,
        signature,
        publicKey,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Imagekit authentication failed" },
      { status: 500 },
    );
  }
}

import ImageKit from "imagekit";

export async function POST(req: NextRequest) {
  const { fileId } = await req.json();

  const client = new ImageKit({
    privateKey,
    publicKey,
    urlEndpoint,
  });

  try {
    const result = await client.deleteFile(fileId);

    return NextResponse.json(
      { data: result, message: "File deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log("File deleting error, imageKit: ", error);
    return NextResponse.json({ message: "Failed to delete file" }, { status: 500 });
  }
}
