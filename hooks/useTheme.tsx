import { Theme } from "../lib/types";
import { useEffect, useState } from "react";

const useTheme = () => {
    const [currentTheme, setCurrentTheme] =
        useState<Omit<Theme, "system">>("dark");

    useEffect(() => {
        const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        setCurrentTheme(theme);
    }, []);

    return { currentTheme };
};

export default useTheme;
