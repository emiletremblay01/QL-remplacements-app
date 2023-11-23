import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateIntoDayOfMonth(date: Date) {
  return new Intl.DateTimeFormat("fr-CA", {
    day: "2-digit",
    month: "short",
  }).format(date);
}
