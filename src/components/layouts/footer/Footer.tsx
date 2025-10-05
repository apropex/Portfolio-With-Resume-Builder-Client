import FacebookIcon from "@/assets/icons/FacebookIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import ThreadsIcon from "@/assets/icons/ThreadsIcon";
import TiktokIcon from "@/assets/icons/TiktokIcon";
import XIcon from "@/assets/icons/xIcon";
import Logo from "@/assets/logo";
import Link from "next/link";

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solution",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

export default function Footer() {
  const iconClass = "text-muted-foreground hover:text-primary block size-6";

  return (
    <footer className="pt-8 pb-4 md:pt-16 md:pb-8 mt-8 md:mt-16 overflow-hidden backdrop-blur-xs bg-green-500/4 border-t border-green-500/10">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto size-fit uppercase flex">
          <Logo height="24" width="58.5" />
          <span className="block ml-1.5 text-lg">PortfolioPro</span>
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150 "
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <XIcon iconClass={iconClass} />
          <LinkedinIcon iconClass={iconClass} target="_blank" />
          <FacebookIcon iconClass={iconClass} target="_blank" />
          <ThreadsIcon iconClass={iconClass} target="_blank" />
          <InstagramIcon iconClass={iconClass} target="_blank" />
          <TiktokIcon iconClass={iconClass} target="_blank" />
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} Tailark, All rights reserved
        </span>
      </div>

      <div className="relative flex justify-center">
        <div className="size-40 md:size-60 bg-primary rounded-full blur-[100px] absolute opacity-50 -bottom-48" />
      </div>
    </footer>
  );
}
