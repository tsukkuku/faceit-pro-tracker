import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { PlayerPlace } from "./PlayerPlace";

describe("PlayerPlace tests", () => {
  afterEach(() => {
    cleanup();
  });

  const checkedIconElem = () => {
    const icon = screen.getByTitle("rank-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass(/rankIcon/);
  };

  test("render children", () => {
    render(<PlayerPlace>#500</PlayerPlace>);
    const text = screen.getByText(/#500/);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass(/default/);
    checkedIconElem();
  });
  test("variant top1 render", () => {
    render(<PlayerPlace variant="top1">#1</PlayerPlace>);
    const text = screen.getByText(/#1/);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass(/top1/);
    checkedIconElem();
  });
  test("variant top2 render", () => {
    render(<PlayerPlace variant="top2">#2</PlayerPlace>);
    const text = screen.getByText(/#2/);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass(/top2/);
    checkedIconElem();
  });
  test("variant top3 render", () => {
    render(<PlayerPlace variant="top3">#3</PlayerPlace>);
    const text = screen.getByText(/#3/);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass(/top3/);
    checkedIconElem();
  });
});
