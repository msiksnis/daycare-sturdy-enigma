"use client";

import { useSidebarStore } from "@/hooks/use-sidebar-store";
import { cn } from "@/lib/utils";

export default function SidebarExpandButton() {
  const { isCollapsed, toggleSidebar, _hasHydrated } = useSidebarStore();

  if (!_hasHydrated) return null;

  return (
    <button
      onClick={toggleSidebar}
      className={cn(
        "group absolute top-1/2 flex size-12 cursor-pointer flex-col items-center justify-center bg-transparent p-1.5 transition-all duration-300",
        { "left-56": !isCollapsed, "left-16": isCollapsed },
      )}
    >
      <div
        className={cn(
          "h-4 w-1 origin-top transform rounded-t-full bg-slate-300 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:rounded-full group-hover:bg-slate-400 group-hover:shadow-lg",
          { "group-hover:-rotate-12": isCollapsed },
        )}
      />
      <div
        className={cn(
          "h-4 w-1 origin-bottom transform rounded-b-full bg-slate-300 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:rounded-full group-hover:bg-slate-400 group-hover:shadow-lg",
          { "group-hover:rotate-12": isCollapsed },
        )}
      />
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
}
