import HomeButton from "@/components/buttons/HomeButton";
import AuthPageBanner from "@/components/modules/Auth/AuthPageBanner";
import SignInForm from "@/components/modules/Auth/SignInForm";
import SocialLoginButtons from "@/components/modules/Auth/SocialLoginButtons";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4">
      <div className="z-10 w-full max-w-6xl">
        <div className="bg-secondary/10 overflow-hidden rounded-[40px] shadow-2xl">
          <div className="grid min-h-[700px] lg:grid-cols-2">
            {/* Left Side */}
            <AuthPageBanner />

            {/* Right Side */}
            <div className="relative flex flex-col justify-center p-12 ">
              <HomeButton className="absolute top-5 left-0" />

              <div className="mx-auto w-full max-w-md">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-light uppercase">Welcome back</h2>
                  <p className="mt-2 text-sm text-stone-600">
                    Sign in to continue your creative journey
                  </p>
                </div>

                <SignInForm />
                <SocialLoginButtons />

                <div className="text-muted-foreground mt-8 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="text-primary hover:text-primary/80">
                    Sign up for free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
