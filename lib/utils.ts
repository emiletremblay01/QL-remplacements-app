import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { cache } from "react";
import prismadb from "./prismadb";

export const getRemplacements = cache(async () => {
  const item = await prismadb.remplacement.findMany();
  return item;
});
