import Logo from "@/assets/logo";
import { ModeToggle } from "@/components/ModeToggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";

// Navigation links array to be used in both desktop and mobile menus
export const navigationLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/projects", label: "Projects" },
  { href: "/resume-builder", label: "Resume Builder" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar({ className }: { className?: string }) {
  return (
    <>
      <div className="fixed left-0 top-0 w-full h-full max-h-[5rem] pt-2.5 z-50">
        <div
          className={cn(
            "border border-green-500/20 bg-background overflow-hidden rounded-4xl",
            "shadow-[2px_5px_8px_rgba(0,0,0,0.2)] dark:shadow-[2px_4px_9px_rgba(0,255,0,0.13)]",
            "w-full max-w-xl mx-auto flex items-center justify-center"
          )}
        >
          <div className="hidden lg:block w-full bg-green-500/5 py-1.5 px-2">
            <NavLinks />
          </div>
        </div>
      </div>
      <header className={className}>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <MobileNav />
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-primary hover:text-primary/90">
                <Logo className="w-12 lg:w-20" />
              </Link>
            </div>
          </div>

          {/* Middle */}

          {/* Right Side */}
          <div className="flex items-center gap-x-3">
            <ModeToggle />
            <ProfileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
