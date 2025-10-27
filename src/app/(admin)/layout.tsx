import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { iChildren } from "./../../types/index";

export default function DashboardLayout({ children }: Readonly<iChildren>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="px-4 w-full">
        <div className="relative">
          <SidebarTrigger className="absolute left-0 top-5" />
        </div>
        <div className="py-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
