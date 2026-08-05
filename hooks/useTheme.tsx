"use client";
import { useCallback, useSyncExternalStore } from "react";

type ResolvedTheme = "light" | "dark";

// The theme lives on <html> (applied pre-hydration by the inline script in
// app/layout.tsx), so the DOM is the source of truth rather than component
// state. A module-level listener set keeps every consumer in sync — the old
// useState version gave each caller its own copy, so a second consumer would
// silently desync from the first.
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
        // Safari private mode and some embedded browsers throw on write.
        // The class is already applied, so the toggle still works this session.
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
