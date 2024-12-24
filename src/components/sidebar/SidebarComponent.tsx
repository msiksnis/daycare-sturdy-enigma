"use client";

import Link from "next/link";

import MainNav from "./MainNav";
import { useSidebarStore } from "@/hooks/use-sidebar-store";
import { cn } from "@/lib/utils";
import SidebarExpandButton from "./SidebarExpandButton";

export default function Sidebar() {
  const { isCollapsed, _hasHydrated } = useSidebarStore();

  if (!_hasHydrated) return null;

  return (
    <div
      className={cn(
        "bg-sidebar fixed top-0 z-50 hidden h-screen w-60 transition-all duration-300 md:block",
        { "md:flex md:w-20": isCollapsed },
      )}
    >
      <div className="relative h-screen">
        <Link
          href="/"
          className={cn(
            "flex h-36 justify-center p-5 transition-all duration-300",
            {
              "md:px-2": isCollapsed,
            },
          )}
        >
          {/* <Image
            src="/Logo_Colchester.png"
            alt="logo"
            width={120}
            height={40}
            priority
            className={cn("w-auto", { hidden: isCollapsed })}
          /> */}
        </Link>
        <MainNav />
        <SidebarExpandButton />
      </div>
    </div>
  );
}
