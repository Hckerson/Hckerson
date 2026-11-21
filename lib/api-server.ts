import "server-only";
import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/constants";

export const backendFetch = async (path: string, init: RequestInit = {}) =>
    fetch(`${API_BASE_URL}${path}`, {
        ...init,
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            ...init.headers,
        },
    });

export const readJson = async (source: Request | Response): Promise<unknown> =>
    await source.json().catch(() => null);

export const relay = (upstream: Response) =>
    new NextResponse(upstream.body, {
        status: upstream.status,
        headers: { "Content-Type": "application/json" },
    });
