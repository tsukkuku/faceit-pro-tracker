import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { usePagination } from "./usePagination";

vi.mock("@/shared/hooks", () => ({
  useAppDispatch: vi.fn(() => vi.fn()),
}));

const mockData = {
  items: [{ stats: { "Match ID": "1" } }, { stats: { "Match ID": "2" } }],
} as any;

describe("usePagination tests", () => {
  test("data === 0", () => {
    const { result } = renderHook(() => usePagination({ items: [] }));

    expect(result.current.match).toEqual([]);
    expect(result.current.hasMore).toEqual(false);
  });
  test("current data", () => {
    const { result } = renderHook(() => usePagination(mockData));

    expect(result.current.match).toEqual(mockData.items);
    expect(result.current.hasMore).toEqual(true);
  });
});
