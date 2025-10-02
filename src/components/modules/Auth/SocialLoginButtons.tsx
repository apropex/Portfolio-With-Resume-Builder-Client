"use client";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SocialLoginButtons() {
  const handleSocialLogin = async (provider: "google" | "github") => {
    await signIn(provider, {
      callbackUrl: "/",
    });
  };

  return (
    <div className="mt-8">
      <div className="relative text-center text-sm text-stone-500 mb-4">
        <div className="absolute inset-0 flex items-center">
          <div className="border-border w-full border-t"></div>
        </div>
        <span className="relative px-2">Or continue with</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="border-border bg-secondary/20 text-foreground hover:bg-secondary/40 flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm shadow-sm"
          onClick={() => handleSocialLogin("google")}
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            width={20}
            height={20}
            alt="Google"
          />
          <span className="ml-2">Google</span>
        </button>
        <button
          type="button"
          className="border-border bg-secondary/20 text-foreground hover:bg-secondary/40 flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm shadow-sm"
          onClick={() => handleSocialLogin("github")}
        >
          <Github className="h-5 w-5" />
          <span className="ml-2">GitHub</span>
        </button>
      </div>
    </div>
  );
}
