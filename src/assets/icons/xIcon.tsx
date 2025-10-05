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

export default function XIcon({
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
      aria-label="X/Twitter"
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
          d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
        />
      </svg>
      {text && text}
    </Link>
  );
}
