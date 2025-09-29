import Navbar from "@/components/layouts/navbar/Navbar";
import { iChildren } from "@/types";

export default function PublicLayout({ children }: Readonly<iChildren>) {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
}
