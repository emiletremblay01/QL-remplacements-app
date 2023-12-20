import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { cache } from "react";
import prismadb from "./prismadb";

export const getLatestRemplacements = cache(async () => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const remplacements = await prismadb.remplacement.findMany({
    where: {
      dateQuart: {
        gte: currentDate,
      },
    },
    orderBy: {
      dateDemande: "desc",
    },
  });
  return remplacements;
});

export const getAllRemplacements = cache(async () => {
  const remplacements = await prismadb.remplacement.findMany({
    orderBy: {
      dateDemande: "desc",
    },
  });
  return remplacements;
});
