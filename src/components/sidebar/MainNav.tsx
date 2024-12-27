"use client";

import {
  DogIcon,
  FileTextIcon,
  HomeIcon,
  MoonIcon,
  ShoppingBagIcon,
  UsersIcon,
  CalendarDaysIcon,
  BellIcon,
  Settings2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import useMenuStore from "@/hooks/use-menu-store";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/hooks/use-sidebar-store";

export default function MainNav() {
  const { closeMenu } = useMenuStore();
  const { isCollapsed } = useSidebarStore();

  const pathName = usePathname();

  const routes = [
    {
      href: `/`,
      label: "Home",
      isActive: pathName === `/`,
      icon: <HomeIcon size={25} strokeWidth={1.5} />,
    },
    {
      href: `/owners`,
      label: "Owners",
      isActive: pathName!.startsWith(`/owners`),
      icon: <UsersIcon size={25} strokeWidth={1.5} />,
    },
    {
      href: `/canines`,
      label: "Canines",
      isActive: pathName!.startsWith(`/canines`),
      icon: <DogIcon size={25} strokeWidth={1.5} />,
    },
    {
      href: `/bookings`,
      label: "Bookings",
      isActive: pathName!.startsWith(`/bookings`),
      icon: <CalendarDaysIcon size={25} strokeWidth={1.5} />,
    },
    {
      href: `/shop-items`,
      label: "Shop Items",
      isActive: pathName!.startsWith(`/shop`),
      icon: <ShoppingBagIcon size={25} strokeWidth={1.5} />,
    },
    {
      href: `/end-of-day`,
      label: "End of Day",
      isActive: pathName!.startsWith(`/end-of-day`),
      icon: <MoonIcon size={25} strokeWidth={1.5} />,
    },
    {
      href: `/notifications`,
      label: "Notifications",
      isActive: pathName!.startsWith(`/notifications`),
      icon: <BellIcon size={25} strokeWidth={1.5} />,
    },
    {
      href: `/reports`,
      label: "Reports",
      isActive: pathName!.startsWith(`/reports`),
      icon: <FileTextIcon size={25} strokeWidth={1.5} />,
    },
    {
      href: `/settings`,
      label: "Settings",
      isActive: pathName!.startsWith(`/settings`),
      icon: <Settings2Icon size={25} strokeWidth={1.5} />,
    },
  ];

  return (
    <nav
      className={cn(
        "mx-4 flex w-full flex-1 flex-col space-y-2 overflow-hidden transition-all duration-300",
        {
          "md:w-20": isCollapsed,
        },
      )}
    >
      {routes.map((route) => (
        <Link key={route.href} href={route.href} onClick={closeMenu}>
          <div
            className={cn(
              "flex h-full items-center space-x-2.5 overflow-hidden whitespace-nowrap rounded-md px-4 py-2.5 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-chill-100 md:w-[calc(100%-2rem)]",

              {
                "bg-gradient-to-br from-blue-chill-200/90 to-blue-chill-300 shadow-sm hover:bg-blue-chill-300 md:overflow-hidden":
                  route.isActive,
              },
              { "md:px-2.5": isCollapsed },
            )}
          >
            <>
              <div>{route.icon}</div>
              <div
                className={cn("opacity-100 transition-all duration-300", {
                  "md:opacity-0": isCollapsed,
                })}
              >
                {route.label}
              </div>
            </>
          </div>
        </Link>
      ))}
    </nav>
  );
}
