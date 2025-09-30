import { cn } from "@/lib/utils";
import { iButton } from "@/types";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface iProps extends iButton {
  className?: string;
}

export default function HomeButton({
  className = "",
  variant = "outline",
  size = "icon",
}: iProps) {
  return (
    <div className={cn(className)}>
      <Link href={"/"}>
        <Button size={size} variant={variant}>
          <HomeIcon />
        </Button>
      </Link>
    </div>
  );
}
