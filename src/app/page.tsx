import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import Hero from "@/components/modules/Home/hero/hero";
import Skills from "@/components/modules/Home/skills/skills";
import ClickSpark from "@/components/ui/ClickSpark";

//

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#01ad04"
      sparkSize={15}
      sparkRadius={20}
      sparkCount={12}
      duration={400}
    >
      {/* Your content here */}
      <div className="absolute top-0 left-0 z-50 min-w-dvw px-4 md:px-8 lg:px-14">
        <Navbar />
      </div>
      <Hero />
      <Skills />
      <Footer />
    </ClickSpark>
  );
}
