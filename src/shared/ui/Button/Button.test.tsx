import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { Button } from "./Button";

const mockFunc = vi.fn();

describe("Button tests", () => {
  afterEach(() => {
    cleanup();
  });
  test("primary class", () => {
    render(<Button>Click</Button>);
    const btn = screen.getByRole("button", { name: "Click" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass(/primary/);
  });
  test("search-primary class", () => {
    render(<Button variant="search-primary">Icon</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass(/search-primary/);
  });
  test("player-place class", () => {
    render(<Button variant="player-place">#1000</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass(/player-place/);
  });
  test("toggle-theme class", () => {
    render(<Button variant="toggle-theme">Change</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass(/toggle-theme/);
  });
  test("onClick in button", () => {
    render(<Button onClick={mockFunc}>Click</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(mockFunc).toBeCalled();
  });
  test("additional class", () => {
    render(<Button className="newClass">Click</Button>);
    const btn = screen.getByRole("button", { name: "Click" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass(/primary/, /newClass/);
  });
});
