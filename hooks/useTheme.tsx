"use client";
import { useEffect, useState } from "react";

const useTheme = () => {
    const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const isLight = document.documentElement.classList.contains("light");
        setCurrentTheme(isLight ? "light" : "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setCurrentTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        
        if (newTheme === "light") {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        }
    };

    return { currentTheme, toggleTheme };
};

export default useTheme;
