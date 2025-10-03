"use client";

import { FullScreenScrollFX } from "./hero-ui";

const sections = [
  {
    leftLabel: "Debug",
    title: <>Break to Build</>,
    rightLabel: "Refactor",
    background: "/hero/3.jpg",
  },
  {
    leftLabel: "Logic",
    title: <>Think in Systems</>,
    rightLabel: "Patterns",
    background: "/hero/2.jpg",
  },
  {
    leftLabel: "Persistence",
    title: <>Push Through Bugs</>,
    rightLabel: "Patience",
    background: "/hero/1.jpg",
  },
  {
    leftLabel: "Learn",
    title: <>Every Day</>,
    rightLabel: "Build",
    background: "/hero/5.jpg",
  },
  {
    leftLabel: "Deploy",
    title: <>Ship It!</>,
    rightLabel: "Repeat",
    background: "/hero/9.jpeg",
  },
];

export default function Hero() {
  // React.useRef<FullScreenFXAPI>(null);

  return (
    <>
      <FullScreenScrollFX
        sections={sections}
        header={
          <>
            <div>
              <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#ED2939_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine font-extrabold">
                Code
              </span>
            </div>
            <div>With Purpose</div>
          </>
        }
        showProgress
        durations={{ change: 0.7, snap: 800 }}
      />
    </>
  );
}
