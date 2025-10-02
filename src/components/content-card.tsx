"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { Magnetic } from "./ui/magnetic";

interface AuthorCardProps {
  className?: string;
  backgroundImage?: string;

  title: string;
  description: string;
  link?: string;
}

export default function ContentCard({
  className,
  backgroundImage,
  title,
  description,
  link,
}: AuthorCardProps) {
  return (
    <div className="w-full max-w-sm group rounded-md overflow-hidden shadow-xl">
      <div
        className={cn("h-96 w-full relative bg-cover bg-center", className)}
        style={{ backgroundImage: `url(${backgroundImage ? backgroundImage : ""})` }}
      >
        <div
          className={cn(
            "w-full h-full p-4 transition duration-300  flex items-end",
            "group-hover:bg-black/50 group-hover:backdrop-blur-xs"
          )}
        >
          <div className="text content relative z-10">
            <h1 className="font-bold text-lg md:text-xl text-gray-50 line-clamp-1">
              {title}
            </h1>
            <p className="font-normal text-sm text-gray-50 my-2 line-clamp-2">
              {description}
            </p>
            {link && (
              <Magnetic
                intensity={0.1}
                springOptions={{ bounce: 0.2 }}
                actionArea="global"
                range={200}
              >
                <Link href={link}>
                  <Button className="w-full rounded">
                    <Magnetic
                      intensity={0.1}
                      springOptions={{ bounce: 0.2 }}
                      actionArea="global"
                      range={300}
                    >
                      View Details
                    </Magnetic>
                  </Button>
                </Link>
              </Magnetic>
            )}
          </div>

          <div />
        </div>
      </div>
    </div>
  );
}
