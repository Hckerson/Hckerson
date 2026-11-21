import { cue } from "@/lib/home/cue";
import { ABOVE, BED, OFF_LEFT, OFF_RIGHT, SLOT } from "@/lib/home/waypoints";
import type { Script } from "@/lib/types";

export const homeScript: Script = {
    length: 1,
    peak: "resume",
    shots: [
        {
            id: "stack",
            at: 0,
            length: 0.14,
            camera: "press-wide",
            copy: true,
            tone: "stack",
            moves: [
                cue(0, 0.6, {
                    verb: "enter",
                    actor: "stack",
                    from: BED,
                    to: BED,
                }),
                cue(0.6, 0.4, { verb: "hold" }),
            ],
        },
        {
            id: "strip",
            at: 0.14,
            length: 0.18,
            camera: "press-close",
            copy: true,
            tone: "strip",
            moves: [
                cue(0, 0.5, {
                    verb: "fold",
                    actor: "boilerplate",
                    from: [0],
                    to: [-168],
                }),
                cue(0.5, 0.5, {
                    verb: "exit",
                    actor: "boilerplate",
                    from: BED,
                    to: OFF_LEFT,
                }),
            ],
        },
        {
            id: "keyhold",
            at: 0.32,
            length: 0.2,
            camera: "focus-line",
            copy: true,
            tone: "keyhold",
            moves: [
                cue(0, 0.4, {
                    verb: "swap",
                    outgoing: { actor: "draft", to: OFF_LEFT },
                    incoming: {
                        actor: "keyhold-record",
                        from: OFF_RIGHT,
                        to: BED,
                    },
                    overlap: 0.3,
                }),
                cue(0.4, 0.6, { verb: "hold" }),
            ],
        },
        {
            id: "vouchmark",
            at: 0.52,
            length: 0.18,
            camera: "focus-line",
            copy: true,
            tone: "vouchmark",
            moves: [
                cue(0, 0.45, {
                    verb: "travel",
                    actor: "keyhold-record",
                    path: [BED, OFF_LEFT],
                    bank: 0,
                    face: false,
                }),
                cue(0.45, 0.55, {
                    verb: "recolour",
                    actor: "vouchmark-record",
                    from: "draft",
                    to: "rubric",
                    wipe: "down",
                }),
            ],
        },
        {
            id: "resume",
            at: 0.7,
            length: 0.16,
            camera: "press-close",
            copy: true,
            tone: "resume",
            moves: [
                cue(0, 0.6, {
                    verb: "lift",
                    actor: "resume",
                    from: 0,
                    height: ABOVE.z,
                }),
                cue(0.6, 0.4, { verb: "hold" }),
            ],
        },
        {
            id: "slot",
            at: 0.86,
            length: 0.14,
            camera: "press-wide",
            copy: true,
            tone: "slot",
            moves: [
                cue(0, 0.6, {
                    verb: "travel",
                    actor: "resume",
                    path: [ABOVE, SLOT],
                    bank: 0,
                    face: false,
                }),
                cue(0.6, 0.4, {
                    verb: "land",
                    actor: "resume",
                    from: ABOVE.z,
                    surface: 0,
                }),
            ],
        },
    ],
};
