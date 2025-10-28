"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Tag, TagInput } from "emblor";
import { Dispatch, SetStateAction, useId, useState } from "react";

interface iProps {
  tags: Tag[];
  setTags: Dispatch<SetStateAction<Tag[]>>;
  className?: string;
  error?: string | null;
}

export default function SelectTags({ tags, setTags, error, className }: iProps) {
  const id = useId();
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <div className={className}>
      <Label
        htmlFor={id}
        className={cn("mb-1.5 block", {
          "text-destructive": !!error,
        })}
      >
        Tags
      </Label>
      <TagInput
        id={id}
        tags={tags}
        setTags={(newTags) => {
          setTags(newTags);
        }}
        placeholder="Add related tags"
        styleClasses={{
          inlineTagsContainer:
            "border-input rounded bg-background dark:bg-input/30 shadow-xs transition-[color,box-shadow] focus-within:border-ring outline-none focus-within:ring-[3px] focus-within:ring-ring/50 p-1 gap-1",
          input: "w-full min-w-[80px] shadow-none px-2 h-7",
          tag: {
            body: "h-7 relative bg-background border border-input hover:bg-background rounded font-medium text-xs text-foreground ps-2 pe-7",
            closeButton:
              "absolute -inset-y-px -end-px p-0 rounded-e-md flex size-7 transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-muted-foreground hover:text-foreground",
          },
        }}
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
      />
      {error && <span className="text-destructive text-sm mt-1.5 block">{error}</span>}
    </div>
  );
}
