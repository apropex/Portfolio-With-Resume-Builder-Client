"use client";

import GithubIcon from "@/assets/icons/GithubIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { iProjectCard } from "@/types/project.types";
import { isGithubLinksObject } from "@/utils/isObject";
import { joinString } from "@/utils/joinString";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Link2Icon, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ProductCard({
  id,
  title,
  description,
  images,
  rating,
  reviewCount,
  isPremium,
  discountPrice = 0,
  originalPrice = 0,
  technologies,
  liveLink,
  githubLinks,
}: iProjectCard) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishListed, setIsWishListed] = useState(false);
  const [allTechs, setAllTechs] = useState<string[]>([]);

  useEffect(() => {
    setAllTechs([]);
    technologies?.forEach(({ technologies }) =>
      technologies?.forEach((tech) => setAllTechs((prev) => [...prev, tech]))
    );
  }, [technologies]);

  const nextImage = (e: React.MouseEvent) => {
    if (!images) return;
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    if (!images) return;
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden group bg-background text-foreground shadow-xl hover:shadow-lg transition-all duration-300 rounded-md p-0">
      {/* Image carousel */}
      <div className="relative aspect-[3/4] overflow-hidden ">
        <motion.img
          key={currentImageIndex}
          src={images?.[currentImageIndex]}
          alt={`${title} - View ${currentImageIndex + 1}`}
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full text-black/80 dark:text-white/80 bg-background/80 backdrop-blur-sm shadow-sm"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full text-black/80 dark:text-white/80 bg-background/80 backdrop-blur-sm shadow-sm"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {images?.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentImageIndex ? "bg-primary w-4" : "bg-primary/30"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>

        {/* Wishlist button */}
        <Button
          variant="secondary"
          size="icon"
          className={`absolute top-3 right-3 h-8 w-8 rounded-full text-black/80 dark:text-white bg-background/80 backdrop-blur-sm shadow-sm ${
            isWishListed ? "text-rose-500" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsWishListed(!isWishListed);
          }}
        >
          <Heart className={`h-4 w-4 ${isWishListed ? "fill-rose-500" : ""}`} />
        </Button>
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-medium line-clamp-1">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                <span className="ml-1 text-sm font-medium">{rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                ({reviewCount} reviews)
              </span>

              <span
                className={cn("text-xs text-emerald-600 ml-auto", {
                  "text-[#ffa600]": isPremium,
                })}
              >
                {isPremium ? "Premium Code" : "Free Code"}
              </span>
            </div>
          </div>

          {/* Price */}
          {isPremium && (
            <div className="flex items-baseline gap-2">
              {discountPrice > 0 && (
                <span className="text-lg font-semibold">${discountPrice.toFixed(2)}</span>
              )}
              {originalPrice > 0 && originalPrice > discountPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="mt-2">
          <p className="line-clamp-3 text-muted-foreground">{description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {allTechs?.map((tech, i) => (
              <span
                key={i}
                className="bg-accent block py-1 px-2 text-sm rounded border dark:border-gray-900 flex-1 whitespace-nowrap text-center cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          <Button asChild size={"sm"} className="w-full">
            <Link href={joinString("/projects/", id)}>
              <Link2Icon /> View Details
            </Link>
          </Button>
          <Button asChild size={"sm"} variant={"outline"} className="flex-1">
            <Link href={liveLink}>
              <Link2Icon /> Live View
            </Link>
          </Button>

          {isGithubLinksObject(githubLinks) ? (
            <>
              {githubLinks!.clientRepo && (
                <Button asChild size={"sm"} variant={"outline"} className="flex-1">
                  <GithubIcon href={githubLinks.clientRepo} text="Frontend" />
                </Button>
              )}
              {githubLinks!.serverRepo && (
                <Button asChild size={"sm"} variant={"outline"} className="flex-1">
                  <GithubIcon href={githubLinks.serverRepo} text="Backend" />
                </Button>
              )}
            </>
          ) : (
            <Button asChild size={"sm"} variant={"outline"} className="flex-1">
              <GithubIcon href={githubLinks} text="GitHub Repo" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
