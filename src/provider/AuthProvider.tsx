"use client";

import { iChildren } from "@/types";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }: iChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
