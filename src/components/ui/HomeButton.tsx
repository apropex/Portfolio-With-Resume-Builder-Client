import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

interface iProps {
  className?: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
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
