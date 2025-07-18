import { describe, expect, test } from "vitest";
import { getVariant } from "./getVariant";

describe("getVariant helper", () => {
  test("top1 position", () => {
    expect(getVariant(1)).toBe("top1");
  });
  test("top2 position", () => {
    expect(getVariant(2)).toBe("top2");
  });
  test("top3 position", () => {
    expect(getVariant(3)).toBe("top3");
  });
  test("dont have position", () => {
    expect(getVariant(0)).toBe("default");
  });
  test("close position", () => {
    expect(getVariant(4)).toBe("default");
  });
  test("return default", () => {
    expect(getVariant(777)).toBe("default");
  });
});
