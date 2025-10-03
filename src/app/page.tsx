import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import ParallaxBackground from "@/components/modules/Home/skills/skills";

export default function Home() {
  return (
    <div className="relative">
      <Navbar className="fixed top-0 z-50 min-w-dvw px-4 md:px-8 lg:px-14" />
      {/* <Hero /> */}
      <div className="h-[1000px]" />
      <ParallaxBackground />

      <div className="h-[1000px]" />
      <Footer />
    </div>
  );
}
