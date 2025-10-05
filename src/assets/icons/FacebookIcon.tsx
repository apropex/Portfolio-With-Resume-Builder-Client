import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

interface iProps {
  href?: string;
  className?: string;
  iconClass?: string;
  width?: string | number;
  height?: string | number;
  size?: string | number;
  text?: string;
  target?: HTMLAttributeAnchorTarget;
}

export default function FacebookIcon({
  href = "#",
  className,
  iconClass,
  width = "1em",
  height = "1em",
  size,
  text,
  target,
}: iProps) {
  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      aria-label="Facebook"
      className={className}
    >
      <svg
        className={iconClass}
        xmlns="http://www.w3.org/2000/svg"
        width={size || width}
        height={size || height}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
        />
      </svg>
      {text && text}
    </Link>
  );
}
