"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { Magnetic } from "./ui/magnetic";

interface AuthorCardProps {
  className?: string;
  backgroundImage?: string;

  content: {
    title: string;
    description: string;
    link?: string;
  };
}

export default function ContentCard({
  className,
  backgroundImage,
  content,
}: AuthorCardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover",
          className
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60 flex flex-col items-end" />
        <div />

        <div className="text content relative z-10">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50">{content.title}</h1>
          <p className="font-normal text-sm text-gray-50 my-4">{content.description}</p>
          {content.link && (
            <Magnetic
              intensity={0.1}
              springOptions={{ bounce: 0.2 }}
              actionArea="global"
              range={200}
            >
              <Link href={content.link}>
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
      </div>
    </div>
  );
}
