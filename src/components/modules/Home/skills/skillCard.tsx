import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const tooltip = tooltipRef.current;

    if (!card || !tooltip) return;

    // Initial state
    gsap.set(card, { scale: 1 });
    gsap.set(tooltip, { y: 20, opacity: 0, scale: 0.95 });

    let enterAnimation: GSAPTimeline;
    let leaveAnimation: GSAPTimeline;

    const createEnterAnimation = () => {
      // Kill any ongoing animations
      gsap.killTweensOf([card, tooltip]);

      enterAnimation = gsap.timeline();
      enterAnimation.to(card, { scale: 1.05, duration: 0.2, ease: "power2.out" }).to(
        tooltip,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.1"
      );
    };

    const createLeaveAnimation = () => {
      // Kill any ongoing animations
      gsap.killTweensOf([card, tooltip]);

      leaveAnimation = gsap.timeline();
      leaveAnimation
        .to(tooltip, {
          y: 20,
          opacity: 0,
          scale: 0.95,
          duration: 0.2,
          ease: "power2.in",
        })
        .to(card, { scale: 1, duration: 0.2, ease: "power2.out" }, "-=0.1")
        .call(() => {
          // Ensure final state after leave
          gsap.set(tooltip, { opacity: 0, visibility: "hidden" });
        });
    };

    const handleMouseEnter = () => {
      gsap.set(tooltip, { visibility: "visible" });
      createEnterAnimation();
      enterAnimation?.play();
    };

    const handleMouseLeave = () => {
      createLeaveAnimation();
      leaveAnimation?.play();
    };

    // For touch devices: Toggle on tap, but ensure it hides on next interaction
    let isTooltipVisible = false;
    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        e.stopPropagation();
        if (isTooltipVisible) {
          createLeaveAnimation();
          leaveAnimation?.play();
          isTooltipVisible = false;
        } else {
          gsap.set(tooltip, { visibility: "visible" });
          createEnterAnimation();
          enterAnimation?.play();
          isTooltipVisible = true;
        }
      }
    };

    // Close tooltip if clicking outside on touch
    const handleTouchEnd = (e: TouchEvent) => {
      if (window.innerWidth < 768 && isTooltipVisible) {
        const touch = e.changedTouches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (!card.contains(target)) {
          createLeaveAnimation();
          leaveAnimation?.play();
          isTooltipVisible = false;
        }
      }
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("touchstart", handleTouchStart, { passive: false });
    card.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      gsap.killTweensOf([card, tooltip]);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("touchstart", handleTouchStart);
      card.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#18181B] rounded p-2 border relative cursor-pointer group"
    >
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

      {/* Tooltip for description */}
      <div
        ref={tooltipRef}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-background text-foreground text-sm rounded-lg shadow-lg opacity-0 pointer-events-none z-20 max-w-[450px] whitespace-pre-wrap w-full"
        style={{
          minWidth: "200px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {description}
      </div>
    </div>
  );
}
