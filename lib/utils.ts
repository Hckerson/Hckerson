import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes with later ones winning conflicts.
 *
 * Plain `clsx` only concatenates, so a caller passing `rounded-lg` to a
 * component that already sets `rounded-md` emitted both and left the winner to
 * CSS source order. `twMerge` resolves the conflict in favour of the caller.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
