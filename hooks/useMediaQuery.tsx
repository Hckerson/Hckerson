"use client";
import { useCallback, useSyncExternalStore } from "react";

export default function useMediaQuery(query: string): boolean {
    const subscribe = useCallback(
        (onStoreChange: () => void) => {
            const mql = window.matchMedia(query);
            mql.addEventListener("change", onStoreChange);
            return () => mql.removeEventListener("change", onStoreChange);
        },
        [query],
    );

    const getSnapshot = useCallback(
        () => window.matchMedia(query).matches,
        [query],
    );

    const getServerSnapshot = () => false;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
