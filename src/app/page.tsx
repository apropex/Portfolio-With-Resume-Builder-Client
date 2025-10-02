import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import Hero from "@/components/modules/Home/hero/hero";

export default function Home() {
  // text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine

  return (
    <div className="relative">
      <Navbar className="fixed top-0 z-50 min-w-dvw px-4 md:px-8 lg:px-14" />
      {/* <h1 className="mt-12 text-6xl font-extrabold">
        Muhammad{" "}
        <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine">
          Abdullah
        </span>
      </h1> */}

      {/*  */}

      <Hero />

      <Footer />
    </div>
  );
}
