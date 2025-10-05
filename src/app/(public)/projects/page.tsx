//

import { ProductCard } from "@/components/project-card";
import { projectContent } from "./project-content";

export default function ProjectsPage() {
  return (
    <div className="">
      <h1 className="mb-6">This is ProjectsPage component</h1>
      {/* <RichTextEditor /> */}

      <div className="flex items-start justify-center gap-5">
        {projectContent.map((content, i) => (
          <ProductCard
            key={i}
            id={content.id}
            title={content.title}
            description={content.description}
            images={content.images}
            rating={content.rating}
            reviewCount={content.reviewCount}
            isPremium={content.isPremium}
            discountPrice={content.discountPrice}
            originalPrice={content.originalPrice}
            technologies={content.technologies}
            liveLink={content.liveLink}
            githubLinks={content.githubLinks}
          />
        ))}
      </div>
    </div>
  );
}
