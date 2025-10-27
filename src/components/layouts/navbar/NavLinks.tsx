"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "./Navbar";

const checkIsActive = (href: string, pathname: string): boolean => {
  let isActive = false;
  if (pathname.length > 1 && href !== "/") {
    if (pathname.includes(href)) isActive = true;
  }
  if (pathname.length === 1 && href === "/") isActive = true;

  return isActive;
};

export default function NavLinks() {
  const pathname = usePathname() || "";

  return (
    <div>
      {navigationLinks?.map((link, index) => (
        <Link href={link.href} key={index}>
          <button
            className={cn(
              "text-muted-foreground py-1.5 font-medium px-3.5 rounded-full cursor-pointer hover:text-accent-foreground",
              {
                "focus:bg-accent hover:bg-accent border border-green-500/10 bg-accent text-accent-foreground":
                  checkIsActive(link.href, pathname),
              }
            )}
          >
            {link.label}
          </button>
        </Link>
      ))}
    </div>
  );
}
