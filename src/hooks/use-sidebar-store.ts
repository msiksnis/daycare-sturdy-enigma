import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SidebarState {
  isCollapsed: boolean;
  _hasHydrated: boolean;
  toggleSidebar: () => void;
  setHasHydrated: (hydrated: boolean) => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isCollapsed: false,
      _hasHydrated: false,
      toggleSidebar: () =>
        set((state) => ({ isCollapsed: !state.isCollapsed })),
      setHasHydrated: (hydrated: boolean) => set({ _hasHydrated: hydrated }),
    }),
    {
      name: "sidebar-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => {
        return (state) => {
          if (state) {
            state.setHasHydrated(true);
          }
        };
      },
    },
  ),
);
