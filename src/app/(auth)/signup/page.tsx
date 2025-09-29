import AuthPageBanner from "@/components/modules/Auth/AuthPageBanner";
import SignUpForm from "@/components/modules/Auth/SignUpForm";
import SocialLoginButtons from "@/components/modules/Auth/SocialLoginButtons";
import HomeButton from "@/components/ui/HomeButton";
import Link from "next/link";

export default function SignUpPage() {
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
                  <h2 className="text-3xl font-light uppercase">Create An Account</h2>
                  <p className="mt-2 text-sm text-stone-600">
                    Sign up to continue your creative journey
                  </p>
                </div>

                <SignUpForm />
                <SocialLoginButtons />

                <div className="text-muted-foreground mt-8 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/signin" className="text-primary hover:text-primary/80">
                    Sign in again
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
