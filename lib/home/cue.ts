import type { Move, MoveCue } from "@/lib/types";

export const cue = (at: number, length: number, move: Move): MoveCue => ({
    at,
    length,
    move,
});
