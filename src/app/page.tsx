import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import Hero from "@/components/modules/Home/hero/hero";
import Skills from "@/components/modules/Home/skills/skills";
import ClickSpark from "@/components/ui/ClickSpark";

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#01ad04"
      sparkSize={15}
      sparkRadius={20}
      sparkCount={12}
      duration={400}
    >
      <div className="relative z-[100]">
        <Navbar className="absolute z-[100] w-full px-4 md:px-8" />
      </div>
      <Hero />
      <Skills />
      <Footer />
    </ClickSpark>
  );
}
