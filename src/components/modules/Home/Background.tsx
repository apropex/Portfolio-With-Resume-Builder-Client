import { Particles } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";
import { iChildren } from "@/types";

interface iProps extends iChildren {
  className?: string;
}

export default function Background({ children, className }: iProps) {
  return (
    <section className={cn("relative w-full h-auto overflow-hidden", className)}>
      <Particles quantity={400} vy={-0.05} staticity={35} />
      {children}
    </section>
  );
}
