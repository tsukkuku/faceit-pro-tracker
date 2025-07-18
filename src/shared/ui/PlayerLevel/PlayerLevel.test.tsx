import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { PlayerLevel } from "./PlayerLevel";

describe("PlayerLevel tests", () => {
  afterEach(() => {
    cleanup();
  });

  test("PlayerLevel render", () => {
    render(<PlayerLevel position={500} skill_level={10} />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass(/default/);
  });

  test("PlayerLevel === 1000", () => {
    render(<PlayerLevel position={1000} skill_level={10} />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass(/default/);
  });

  test("PlayerLevel dont have position", () => {
    render(<PlayerLevel position={0} skill_level={5} />);
    const btn = screen.getByRole("img");
    expect(btn).toBeInTheDocument();
  });

  test("PlayerLevel > 1000", () => {
    render(<PlayerLevel position={1001} skill_level={10} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

  test("Level render", () => {
    render(<PlayerLevel position={4567} skill_level={10} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
