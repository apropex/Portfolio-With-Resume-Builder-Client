"use client";

import MenubarIcon from "@/assets/icons/menubarIcon";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { usePathname } from "next/navigation";
import { navigationLinks } from "./Navbar";

export default function MobileNav() {
  const pathName = usePathname();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="group size-8 lg:hidden" variant="ghost" size="icon">
          <MenubarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-36 p-1 md:hidden">
        <NavigationMenu className="max-w-none *:w-full">
          <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index} className="w-full">
                <NavigationMenuLink
                  href={link.href}
                  className="py-1.5"
                  active={link.active}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </PopoverContent>
    </Popover>
  );
}
