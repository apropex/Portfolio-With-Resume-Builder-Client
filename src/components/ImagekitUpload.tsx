"use client";

import { iImageKitAuthParams, iImageKitResponse } from "@/types";
import { _fetch } from "@/utils/_fetch";
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";

export const fileUploader = async (file: File): Promise<iImageKitResponse> => {
  if (!file) throw new Error("No file provided for upload.");

  const allowedTypes = [
    // Images
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",

    // Videos
    "video/mp4",
    "video/webm",
    "video/ogg",
    "video/quicktime", // .mov
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error("Only image and video formats are allowed.");
  }

  const isImage = file.type.startsWith("image/");
  // const isVideo = file.type.startsWith("video/");

  const IMAGE_MAX_SIZE_MB = 5;
  const VIDEO_MAX_SIZE_MB = 100;

  const maxSizeBytes = isImage
    ? IMAGE_MAX_SIZE_MB * 1024 * 1024
    : VIDEO_MAX_SIZE_MB * 1024 * 1024;

  if (file.size > maxSizeBytes) {
    throw new Error(
      `File size exceeds the limit of ${
        isImage ? IMAGE_MAX_SIZE_MB : VIDEO_MAX_SIZE_MB
      }MB.`,
    );
  }

  const abortController = new AbortController();

  try {
    const { signature, expire, token, publicKey } =
      await _fetch<iImageKitAuthParams>("/api/auth/image-kit");

    return (await upload({
      file,
      fileName: file.name,
      token,
      signature,
      expire,
      publicKey,
      abortSignal: abortController.signal,
    })) as iImageKitResponse;

    //
  } catch (error) {
    if (error instanceof ImageKitAbortError) {
      console.error("Upload aborted:", error.reason);
    } else if (error instanceof ImageKitInvalidRequestError) {
      console.error("Invalid request:", error.message);
    } else if (error instanceof ImageKitUploadNetworkError) {
      console.error("Network error:", error.message);
    } else if (error instanceof ImageKitServerError) {
      console.error("Server error:", error.message);
    } else {
      console.error("Unexpected upload error:", error);
    }

    throw new Error("Failed to upload file to ImageKit.");
  }
};

/*

{
    "fileId": "68d7c5075c7cd75eb8c5f566",
    "name": "a11_gL_Nu0EG0.jpg",
    "size": 119069,
    "versionInfo": {
        "id": "68d7c5075c7cd75eb8c5f566",
        "name": "Version 1"
    },
    "filePath": "/a11_gL_Nu0EG0.jpg",
    "url": "https://ik.imagekit.io/wdaa/a11_gL_Nu0EG0.jpg",
    "fileType": "image",
    "height": 1077,
    "width": 1080,
    "thumbnailUrl": "https://ik.imagekit.io/wdaa/tr:n-ik_ml_thumbnail/a11_gL_Nu0EG0.jpg",
    "AITags": null,
    "description": null
}

*/
