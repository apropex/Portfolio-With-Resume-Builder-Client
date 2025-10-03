"use client";

import { cn } from "@/lib/utils";
import { iChildren } from "@/types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface iProps extends iChildren {
  className?: string;
  bgUrl: string;
}

export default function ParallaxBackground({ children, className, bgUrl }: iProps) {
  useEffect(() => {
    gsap.to(".parallax-bg", {
      yPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".content",
      { y: 0 },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="parallax-section relative overflow-hidden w-full">
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
        style={{ backgroundImage: `url(${bgUrl ? bgUrl : ""})` }}
      />
      <div className="content relative z-10">
        <div className="bg-black/65 absolute inset-0" />
        <div className={cn("relative w-full", className)}>{children}</div>
      </div>
    </div>
  );
}
