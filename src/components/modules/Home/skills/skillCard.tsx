import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface iProps {
  item: {
    title: string;
    progress: number;
    description: string;
    src: string;
    alt: string;
  };
}

export function SkillCard({ item }: iProps) {
  const { title, progress, description, src, alt } = item;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-[#18181B] rounded p-2 border">
            <Image
              src={src}
              alt={alt}
              width={128}
              height={128}
              className="size-20 rounded-md object-cover sm:size-24 xl:size-32"
            />

            <p className="text-lg font-medium mt-3">{title}</p>

            <div className="bg-gray-600 mt-2 w-full rounded-lg overflow-hidden">
              <div className={cn("h-2 bg-amber-400")} style={{ width: `${progress}%` }} />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-[400px] text-base bg-gray-900 text-white/80 border border-gray-700 rounded">
          <p className="text-start">{description}</p>
          <div className="bg-gray-600 mt-2 w-full rounded-lg overflow-hidden ">
            <div className={cn("h-2 bg-[#01ad04]")} style={{ width: `${progress}%` }} />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
