import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import ParallaxBackground from "@/components/modules/Home/skills/skills";
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
      {/* Your content here */}
      <div className="relative">
        <Navbar className="fixed top-0 z-50 min-w-dvw px-4 md:px-8 lg:px-14" />
        {/* <Hero /> */}
        <div className="h-[1000px] bg-gray-800" />
        <ParallaxBackground />

        <div className="h-[1000px]" />
        <Footer />
      </div>
    </ClickSpark>
  );
}
