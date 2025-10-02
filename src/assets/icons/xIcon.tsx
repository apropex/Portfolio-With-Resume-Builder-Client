import { cn } from "@/lib/utils";
import Link from "next/link";

export default function XIcon({
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
      aria-label="X/Twitter"
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
          d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
        />
      </svg>
    </Link>
  );
}
