"use client";
import { useCallback, useSyncExternalStore } from "react";

/**
 * Subscribes to a CSS media query.
 *
 * Replaces the `useState(false)` + `useEffect(checkMobile)` pattern, which
 * rendered the desktop branch on the server, then corrected itself only after
 * mount — and missed orientation changes that alter the match without firing
 * a `resize`.
 */
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

    // There is no viewport during SSR. This is the value the server markup and
    // the first hydration pass use; the true value lands immediately after.
    const getServerSnapshot = () => false;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
