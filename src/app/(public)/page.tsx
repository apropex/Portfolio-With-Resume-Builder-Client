import MagneticButton from "@/components/buttons/MagneticButtons";
import ContentCard from "@/components/content-card";
import { User } from "lucide-react";

export default function Home() {
  // text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine

  return (
    <div className="p-container">
      <h1 className="mt-12 text-6xl font-extrabold">
        Muhammad{" "}
        <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine">
          Abdullah
        </span>
      </h1>

      <div className="relative h-40 w-full">
        <MagneticButton>
          <span className="inline-flex gap-x-2">
            <User /> Submit Now
          </span>
        </MagneticButton>
      </div>

      <ContentCard
        backgroundImage="https://i.ibb.co.com/KpW9NBYH/53.jpg"
        content={{
          title: "Author Card",
          description:
            "Card with Author avatar, complete name and time to read - most suitable for blogs.",
          link: "/",
        }}
      />
    </div>
  );
}
