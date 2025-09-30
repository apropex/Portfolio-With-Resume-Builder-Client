//

export interface iChildren {
  children: React.ReactNode;
}

export interface iButton {
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
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
