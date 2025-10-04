/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FlipReveal, FlipRevealItem } from "@/components/flip-reveal";
import ParallaxBackground from "@/components/parallaxBackground";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { SkillCard } from "./skillCard";
import { skillItems } from "./skillItems";

export default function Skills() {
  const [key, setKey] = useState("all");
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [scrollContentWidth, setScrollContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setScrollContentWidth(contentRef.current.scrollWidth);
    }
  }, [skillItems.toggleGroupItem]);

  return (
    <ParallaxBackground
      bgUrl="/hero/9.jpeg"
      yPercent={50}
      className={cn(
        "px-4 py-8 md:px-8 lg:px-14 lg:py-32",
        "min-h-[300px] lg:min-h-[1000px]"
      )}
    >
      <div className="">
        <div className="relative mb-6">
          {/* Top: scrollable content but hidden scrollbar */}
          <div
            className="max-w-max mx-auto overflow-x-scroll scrollbar-hide text-white bg-background/5 dark:bg-background/50 rounded-full p-1.5 border border-gray-600"
            ref={contentRef}
            onScroll={(e) => {
              const target = e.target as HTMLDivElement;
              if (scrollbarRef.current) {
                scrollbarRef.current.scrollLeft = target.scrollLeft;
              }
            }}
          >
            <ToggleGroup
              type="single"
              className="inline-flex w-max"
              value={key}
              onValueChange={(e) => setKey(e)}
            >
              {skillItems.toggleGroupItem.map(({ title, value }) => (
                <ToggleGroupItem
                  key={value}
                  value={value}
                  className="sm:px-4 hover:bg-primary/8 hover:text-primary"
                >
                  {title}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* Bottom: custom scrollbar */}
          <div className="relative px-6 sm:px-10 w-full">
            <div
              className="overflow-x-scroll custom-scrollbar relative left-0 right-0 -bottom-1 h-2 "
              ref={scrollbarRef}
              onScroll={(e) => {
                const target = e.target as HTMLDivElement;
                if (scrollbarRef.current) {
                  scrollbarRef.current.scrollLeft = target.scrollLeft;
                }
              }}
            >
              <div style={{ width: scrollContentWidth }} />
            </div>
          </div>
        </div>

        {/*  */}
        <FlipReveal
          className="flex justify-center flex-wrap gap-3 sm:gap-4 w-full"
          keys={[key]}
          showClass="flex"
          hideClass="hidden"
        >
          {skillItems.flipRevealItem.map((item, i) => (
            <FlipRevealItem key={i} flipKey={item.flipKey}>
              <SkillCard item={item} />
            </FlipRevealItem>
          ))}
        </FlipReveal>
      </div>
    </ParallaxBackground>
  );
}
