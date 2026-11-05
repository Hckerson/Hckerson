"use client";
import { useCallback, useSyncExternalStore } from "react";

type ResolvedTheme = "light" | "dark";

const listeners = new Set<() => void>();

function emit() {
    for (const listener of listeners) listener();
}

function subscribe(onStoreChange: () => void) {
    listeners.add(onStoreChange);
    return () => {
        listeners.delete(onStoreChange);
    };
}

function getSnapshot(): ResolvedTheme {
    return document.documentElement.classList.contains("light")
        ? "light"
        : "dark";
}

function getServerSnapshot(): ResolvedTheme {
    return "dark";
}

function applyTheme(theme: ResolvedTheme) {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");

    try {
        localStorage.setItem("theme", theme);
    } catch {
    }

    emit();
}

const useTheme = () => {
    const currentTheme = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );

    const toggleTheme = useCallback(() => {
        applyTheme(getSnapshot() === "light" ? "dark" : "light");
    }, []);

    return { currentTheme, toggleTheme };
};

export default useTheme;
