import { afterEach, describe, expect, test } from "vitest";
import { getLocalStorage } from "./getLocalStorage";

describe("getLocalStorage func tests", () => {
  afterEach(() => {
    localStorage.clear();
  });
  test("null item theme", () => {
    const item = getLocalStorage();
    expect(item).toEqual("dark");
  });
  test("have light theme", () => {
    localStorage.setItem("theme", JSON.stringify("light"));
    const item = getLocalStorage();
    expect(item).toEqual("light");
  });
});
