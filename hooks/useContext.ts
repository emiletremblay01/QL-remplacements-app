import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Remplacement } from "@/types";

type Context = {
  remplacements: Remplacement[];
  addRemplacement: (remplacement: Remplacement) => void;
  removeRemplacement: (remplacement: Remplacement) => void;
  editRemplacement: (remplacement: Remplacement) => void;
};

const useContext = create<Context>()(
  persist(
    (set, get) => ({
      remplacements: [],
      addRemplacement: (item) => {
        set((state) => ({
          remplacements: [...state.remplacements, item],
        }));
      },
      removeRemplacement: (item) => {
        set((state) => ({
          remplacements: state.remplacements.filter(
            (remplacement) => remplacement.id !== item.id
          ),
        }));
      },
      editRemplacement: () => {},
    }),
    {
      name: "storage-session",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useContext;
