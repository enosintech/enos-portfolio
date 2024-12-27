import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const checkIsTouchDevice = () => {
    if (typeof window !== "undefined") {
      return "ontouchstart" in window;
    }
    return false;
};
  