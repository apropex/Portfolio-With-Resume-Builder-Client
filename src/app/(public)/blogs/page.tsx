//

import ContentCard from "@/components/content-card";
import { cn } from "@/lib/utils";
import { iBlogResponse } from "@/types/blog";
import { _fetch } from "@/utils/_fetch";
import apiLink from "@/utils/apiLink";

export default async function BlogsPage() {
  const { data: blogs, pagination } = await _fetch<iBlogResponse>(apiLink("/blog"), {
    cache: "no-store",
  });

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl font-bold mt-10">Personal Blogs</h1>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-4",
          "w-full max-w-4xl mx-auto mt-12"
        )}
      >
        {blogs?.map(({ id, images, title, content }) => (
          <ContentCard
            key={id}
            backgroundImage={images?.[0]}
            title={title}
            description={content}
            link={`blogs/${id}`}
          />
        ))}
      </div>
    </div>
  );
}
