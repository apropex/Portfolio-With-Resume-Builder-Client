"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "./Navbar";

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <div>
      {navigationLinks?.map((link, index) => (
        <Link href={link.href} key={index}>
          <button
            className={cn(
              "text-muted-foreground py-1.5 font-medium px-3.5 rounded-full cursor-pointer hover:text-accent-foreground",
              {
                "focus:bg-accent hover:bg-accent border border-green-500/10 bg-accent text-accent-foreground":
                  pathName === link.href,
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
