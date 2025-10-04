import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import Background from "@/components/ui/background";
import ClickSpark from "@/components/ui/ClickSpark";

import { iChildren } from "@/types";

export default function PublicLayout({ children }: Readonly<iChildren>) {
  return (
    <Background className="min-h-screen">
      <ClickSpark
        sparkColor="#01ad04"
        sparkSize={15}
        sparkRadius={20}
        sparkCount={12}
        duration={400}
      >
        <div className="flex flex-col min-h-screen">
          <div className="container mx-auto flex-1 p-container">
            <Navbar />
            {children}
          </div>
          <Footer />
        </div>
      </ClickSpark>
    </Background>
  );
}
