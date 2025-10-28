"use client";

import { Code, Feather, Home, Newspaper, Plus, Settings } from "lucide-react";

import Logo from "@/assets/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: Newspaper,
  },
  {
    title: "Create Blog",
    url: "/dashboard/create-blog",
    icon: Feather,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: Code,
  },
  {
    title: "Create Project",
    url: "/dashboard/create-project",
    icon: Plus,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props} variant="floating" collapsible="icon">
      <SidebarHeader className="bg-background rounded-t-3xl">
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href={"/"}>
              <Logo className="w-20" />
              <span>Portfolio</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <Separator />
      </SidebarHeader>
      <SidebarContent className="bg-background rounded-b-3xl">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.includes(item.url) && item.url !== "/"}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
