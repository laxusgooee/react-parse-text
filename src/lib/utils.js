import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** general */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
