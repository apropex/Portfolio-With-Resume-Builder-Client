"use client";

import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import Image from "next/image";
import * as React from "react";

interface iProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "error" | "warning";
  onClick: () => Promise<void>;
  title: string;
  description?: string;
}

export default function AlertDialog({
  isOpen,
  setOpen,
  type = "warning",
  onClick,
  title,
  description,
}: iProps) {
  //

  const handleDialog = async () => {
    await onClick();
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "absolute z-50 w-dvw h-dvh inset-0 bg-background/20 grid place-content-center scale-0 transform transition-all opacity-0 p-4",
        {
          "scale-100 opacity-100": isOpen,
        }
      )}
    >
      <div
        className={cn(
          "bg-zinc-100/45 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200 dark:border-zinc-800 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)]",
          "relative rounded p-4 w-dvh max-w-xl min-h-40"
        )}
      >
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => setOpen(false)}
            type="button"
            className={cn(
              "rounded-[9px] flex items-center justify-center h-8 w-8 p-0 bg-red-50 dark:bg-red-950/50 text-zinc-400 hover:text-red-600 dark:text-zinc-500 dark:hover:text-red-400 transition-colors",
              "hover:border border-red-500"
            )}
          >
            <X className="h-4 w-4" />
          </button>
          <button
            onClick={handleDialog}
            type="button"
            className={cn(
              "rounded-[9px] flex items-center justify-center h-8 w-8 p-0",
              "bg-emerald-50 dark:bg-emerald-950/50",
              "text-zinc-400 hover:text-emerald-600",
              "hover:border border-emerald-600",
              "dark:text-zinc-500 dark:hover:text-emerald-400",
              "transition-colors"
            )}
          >
            <Check className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-4 mt-3">
          {type && (
            <Image
              src={type === "error" ? "/icons/error-icon.png" : "/icons/warning-icon.png"}
              alt="warning icon"
              width={25}
              height={25}
            />
          )}

          <div className="flex-1">
            <p className="md:text-lg font-medium text-zinc-700 dark:text-zinc-300">
              {title}
            </p>
            {description && (
              <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
