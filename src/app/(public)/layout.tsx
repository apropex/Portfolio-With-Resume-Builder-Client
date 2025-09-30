import Navbar from "@/components/layouts/navbar/Navbar";
import Background from "@/components/modules/Home/Background";
import { iChildren } from "@/types";

export default function PublicLayout({ children }: Readonly<iChildren>) {
  return (
    <Background className="min-h-screen">
      <div className="container mx-auto">
        <Navbar />
        {children}
      </div>
    </Background>
  );
}
