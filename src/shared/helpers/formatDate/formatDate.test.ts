import { describe, expect, test } from "vitest";
import { formatDate } from "./formatDate";

describe("formatDate helper", () => {
  test("typeof string date", () => {
    expect(formatDate("2021-06-19T15:40:21.335Z")).toBe("Jun 19, 2021");
  });
  test("typeof number date", () => {
    expect(formatDate(1752856681000)).toBe("July 18 at 07:38 PM");
  });
  test("invalid date", () => {
    expect(formatDate("Invalid Date")).toBe("Invalid Date");
  });
  test("invalid Nan date", () => {
    expect(formatDate(NaN)).toBe("Invalid Date");
  });
});
