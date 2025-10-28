/* eslint-disable @typescript-eslint/no-explicit-any */
//

export interface iChildren {
  children: React.ReactNode;
}

export interface iParams {
  params: Promise<{ id: string }>;
}

export interface iButton {
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export interface iResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: {
    total_data?: number;
    filtered_data?: number;
    present_data?: number;
    total_page?: number;
    present_page?: number;
    skip?: number;
    limit?: number;
    options?: Record<string, any>;
  };
  data: T;
}

export interface iImageKitAuthParams {
  signature: string;
  expire: number;
  token: string;
  publicKey: string;
}

export interface iImageKitResponse {
  fileId: string;
  name: string;
  size: number;
  versionInfo?: {
    id: string;
    name: string;
  };
  filePath: string;
  url: string;
  fileType: string;
  height?: number;
  width?: number;
  thumbnailUrl?: string;
  AITags?: string[] | null;
  description?: string | null;
}
