import { iParams } from "@/types";
import { iBlog } from "@/types/blog";
import { _fetch } from "@/utils/_fetch";
import apiLink from "@/utils/apiLink";
import { format } from "date-fns";
import Image from "next/image";

//

export default async function BlogDetails({ params }: iParams) {
  const id = (await params).id;
  const blog = await _fetch<iBlog>(apiLink("/blog/", id));

  if (!blog) return null;

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="flex justify-center">
          <span className="inline-block text-sm bg-secondary/40 p-1.5 px-5 rounded">
            {format(new Date(blog.publishedAt), "PPP")}
          </span>
        </div>
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
        <Image
          className="rounded-(--radius) w-full"
          src={blog.images?.[0]}
          alt="blog details"
          height={0}
          width={1400}
        />

        <div className="relative mx-auto">
          <div className="flex justify-center flex-wrap gap-2">
            {blog.tags?.map((tag, i) => (
              <span
                key={i}
                className="inline-block bg-secondary/50 rounded py-1 px-3 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="w-full max-w-xl mx-auto border-t mt-6 pt-6 text-center">
            <p className="text-lg">{blog.author?.name}</p>
            <p className="text-muted-foreground">{blog.author?.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
