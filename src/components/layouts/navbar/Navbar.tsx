import Logo from "@/assets/logo";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

// Navigation links array to be used in both desktop and mobile menus
export const navigationLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/projects", label: "Projects" },
  { href: "/resume-builder", label: "Resume Builder" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  return (
    <header className="p-container">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <MobileNav />
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
          </div>
        </div>

        {/* Middle */}
        <div className="max-md:hidden border border-green-500/20 bg-green-500/5 py-1.5 px-2 rounded-4xl shadow-[2px_5px_8px_rgba(0,0,0,0.2)] dark:shadow-[2px_4px_9px_rgba(0,255,0,0.13)]">
          {/* Navigation menu */}
          <NavLinks />
        </div>

        {/* Right Side */}
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
