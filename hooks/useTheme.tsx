"use client";
import { Theme } from "../lib/types";
import { useEffect, useState } from "react";

const useTheme = () => {
    const [currentTheme, setCurrentTheme] = useState<Omit<Theme, "dark"> | "light">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        if (savedTheme) {
            setCurrentTheme(savedTheme);
        } else {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            setCurrentTheme(systemTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setCurrentTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return { currentTheme, toggleTheme };
};

export default useTheme;
