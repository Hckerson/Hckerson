import { Color } from "@/lib/types";

const cardStyles: Record<
    Color,
    {
        border: string;
        text: string;
        light: string;
        dark: string;
        shadow: string;
        linear: string;
        fade: string;
    }
> = {
    orange: {
        border: "border-accent-orange",
        text: "text-accent-orange",
        light: "bg-accent-orange",
        dark: "bg-dark-orange",
        shadow: "var(--card-shadow-orange)",
        linear: "to-accent-orange",
        fade: "var(--card-fade-orange)",
    },
    cyan: {
        border: "border-accent-cyan",
        text: "text-accent-cyan",
        light: "bg-accent-cyan",
        dark: "bg-dark-cyan",
        shadow: "var(--card-shadow-cyan)",
        linear: "to-accent-cyan",
        fade: "var(--card-fade-cyan)",
    },
    green: {
        border: "border-accent-green",
        text: "text-accent-green",
        light: "bg-accent-green",
        dark: "bg-dark-green",
        shadow: "var(--card-shadow-green)",
        linear: "to-accent-green",
        fade: "var(--card-fade-green)",
    },
    purple: {
        border: "border-accent-purple",
        text: "text-accent-purple",
        light: "bg-accent-purple",
        dark: "bg-dark-purple",
        shadow: "var(--card-shadow-purple)",
        linear: "to-accent-purple",
        fade: "var(--card-fade-purple)",
    },
    red: {
        border: "border-accent-red",
        text: "text-accent-red",
        light: "bg-accent-red",
        dark: "bg-dark-red",
        shadow: "var(--card-shadow-red)",
        linear: "to-accent-red",
        fade: "var(--card-fade-red)",
    },
    violet: {
        border: "border-accent-violet",
        text: "text-accent-violet",
        light: "bg-accent-violet",
        dark: "bg-dark-violet",
        shadow: "var(--card-shadow-violet)",
        linear: "to-accent-violet",
        fade: "var(--card-fade-violet)",
    },
    ash: {
        border: "border-accent-ash",
        text: "text-accent-ash",
        light: "bg-accent-ash",
        dark: "bg-dark-ash",
        shadow: "var(--card-shadow-ash)",
        linear: "to-accent-ash",
        fade: "var(--card-fade-ash)",
    },
    mauve: {
        border: "border-accent-mauve",
        text: "text-accent-mauve",
        light: "bg-accent-mauve",
        dark: "bg-dark-mauve",
        shadow: "var(--card-shadow-mauve)",
        linear: "to-accent-mauve",
        fade: "var(--card-fade-mauve)",
    },
    pink: {
        border: "border-accent-pink",
        text: "text-accent-pink",
        light: "bg-accent-pink",
        dark: "bg-dark-pink",
        shadow: "var(--card-shadow-pink)",
        linear: "to-accent-pink",
        fade: "var(--card-fade-pink)",
    },
    transparent: {
        border: "border-transparent",
        text: "text-transparent",
        light: "bg-transparent",
        dark: "",
        shadow: "",
        linear: "",
        fade: "",
    },
    yellow: {
        light: "bg-accent-yellow",
        border: "border-accent-yellow",
        text: "text-accent-yellow",
        dark: "",
        shadow: "",
        linear: "to-accent-yellow",
        fade: "var(--card-fade-yellow)",
    },
    brown: {
        light: "bg-accent-brown",
        border: "border-accent-brown",
        text: "text-accent-brown",
        dark: "",
        shadow: "",
        linear: "to-accent-brown",
        fade: "var(--card-fade-brown)",
    },
    clay: {
        light: "bg-accent-clay",
        border: "border-accent-clay",
        text: "text-accent-clay",
        dark: "",
        shadow: "",
        linear: "to-accent-clay",
        fade: "var(--card-fade-clay)",
    },
    blue: {
        light: "bg-accent-blue",
        border: "border-accent-blue",
        text: "text-accent-blue",
        dark: "",
        shadow: "",
        linear: "to-accent-blue",
        fade: "var(--background)",
    },
};

export { cardStyles };
