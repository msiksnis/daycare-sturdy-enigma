"use client";

import Sidebar from "@/components/sidebar/SidebarComponent";
import { useSidebarStore } from "@/hooks/use-sidebar-store";
import { cn } from "@/lib/utils";

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed, _hasHydrated } = useSidebarStore();

  if (!_hasHydrated) return null;

  return (
    <>
      <Sidebar />
      <div
        className={cn("transition-all duration-300 md:ml-60", {
          "md:ml-20": isCollapsed,
        })}
      >
        {children}
      </div>
    </>
  );
}
