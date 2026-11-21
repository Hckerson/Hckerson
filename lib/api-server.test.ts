import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { API_BASE_URL } from "@/lib/constants";
import { backendFetch } from "./api-server";

beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("{}")));
});

afterEach(() => {
    vi.unstubAllGlobals();
});

describe("calling the backend from the server", () => {
    it("resolves the path against the backend, not the app origin", async () => {
        await backendFetch("/api/health");

        expect(vi.mocked(fetch).mock.calls[0][0]).toBe(
            `${API_BASE_URL}/api/health`,
        );
    });

    it("never serves a stale response", async () => {
        await backendFetch("/api/health");

        const [, init] = vi.mocked(fetch).mock.calls[0];
        expect(init?.cache).toBe("no-store");
    });
});
