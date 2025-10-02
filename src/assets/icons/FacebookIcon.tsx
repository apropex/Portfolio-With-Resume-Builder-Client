import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FacebookIcon({
  href = "#",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className={cn("text-muted-foreground hover:text-primary block", className)}
    >
      <svg
        className="size-6"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
        />
      </svg>
    </Link>
  );
}
