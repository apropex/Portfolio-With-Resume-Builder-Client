"use client";

import { _fetch } from "@/utils/_fetch";

export async function deleteFile(
  fileId: string,
): Promise<{ data: object; message: string }> {
  return await _fetch("/api/auth/image-kit", { method: "POST" }, { fileId });
}
