"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HomeIcon, Inbox } from "lucide-react";
import Link from "next/link";

type Props = {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string; // optional href for Link-based CTA
  onAction?: () => void; // optional callback for onClick
  className?: string;
};

export default function NoDataFound({
  title = "No data found",
  description = "We couldn't find anything matching your search or filters.",
  actionLabel = "Create new",
  actionHref,
  onAction,
  className = "",
}: Props) {
  return (
    <div
      aria-labelledby="no-data-title"
      className={cn(
        "flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ",
        className
      )}
    >
      <Card className="w-full max-w-3xl bg-background/10 backdrop-blur-[2px]">
        <CardHeader className="flex flex-col items-center text-center gap-4 p-8 sm:p-10">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/60 dark:bg-muted/40"
            aria-hidden
          >
            <Inbox className="h-10 w-10" />
          </div>

          <CardTitle id="no-data-title" className="text-lg sm:text-2xl font-semibold">
            {title}
          </CardTitle>

          <CardDescription className="max-w-xl text-sm sm:text-base text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {actionHref ? (
                <Link href={actionHref || "#"}>
                  <Button aria-label={actionLabel} variant={"outline"}>
                    {actionLabel}
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => onAction?.()}
                  aria-label={actionLabel}
                  variant={"outline"}
                >
                  {actionLabel}
                </Button>
              )}

              <Button asChild variant={"outline"} aria-label={"home"}>
                <Link href={"/"}>
                  <HomeIcon /> <span className="inline-block mt-1">Home</span>
                </Link>
              </Button>
            </div>

            <div className="w-full sm:w-auto text-center sm:text-left text-sm text-muted-foreground">
              <p className="hidden sm:block">
                Try clearing filters, resetting the search, or{" "}
                <span className="font-medium">create a new item</span> to get started.
              </p>
              <p className="block sm:hidden">
                Try different filters or create a new item.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
