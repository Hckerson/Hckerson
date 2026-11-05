"use client";

import { useEffect } from "react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    padding: "0 1.5rem",
                    textAlign: "center",
                    background: "#050c14",
                    color: "#ffffff",
                    fontFamily: "system-ui, sans-serif",
                    WebkitFontSmoothing: "antialiased",
                }}
            >
                <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 600 }}>
                    Something went wrong.
                </h1>
                <p
                    style={{
                        margin: 0,
                        maxWidth: "50ch",
                        color: "#a8a29e",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                    }}
                >
                    An unexpected error occurred while loading the site.
                </p>
                <button
                    type="button"
                    onClick={reset}
                    style={{
                        marginTop: "0.5rem",
                        padding: "0.65rem 1.5rem",
                        border: "none",
                        borderRadius: "0.5rem",
                        background: "#22d3ee",
                        color: "#050c14",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        cursor: "pointer",
                    }}
                >
                    Try again
                </button>
            </body>
        </html>
    );
}
