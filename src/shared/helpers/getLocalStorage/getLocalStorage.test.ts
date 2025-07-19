import { afterEach, describe, expect, test } from "vitest";
import { getLocalStorage } from "./getLocalStorage";

describe("getLocalStorage func tests", () => {
  afterEach(() => {
    localStorage.clear();
  });
  test("null item theme", () => {
    const item = getLocalStorage("theme", "dark");
    expect(item).toEqual("dark");
  });
  test("have light theme", () => {
    localStorage.setItem("theme", JSON.stringify("light"));
    const item = getLocalStorage("theme", "dark");
    expect(item).toEqual("light");
  });
  test("null array item", () => {
    const item = getLocalStorage("savedPlayers", []);
    expect(item).toEqual([]);
  });
  test("have array item", () => {
    localStorage.setItem("savedPlayers", JSON.stringify([{ id: "1" }]));
    const item = getLocalStorage("savedPlayers", []);
    expect(item).toEqual([{ id: "1" }]);
  });
});
