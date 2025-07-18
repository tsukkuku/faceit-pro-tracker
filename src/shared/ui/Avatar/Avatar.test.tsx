import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar tests", () => {
  afterEach(() => {
    cleanup();
  });

  test("render Avatar", () => {
    const url = "mock-image.jpg";
    render(<Avatar src={url} alt="Image" />);

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", url);
    expect(img).toHaveAttribute("alt", "Image");
  });
  test("default size Avatar", () => {
    const url = "mock-image.jpg";
    render(<Avatar src={url} alt="Image" />);

    const container = screen.getByTestId("avatar-container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(/md/);
  });
  test("sm size Avatar", () => {
    const url = "mock-image.jpg";
    render(<Avatar src={url} size="sm" alt="Image" />);

    const container = screen.getByTestId("avatar-container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(/sm/);
  });
  test("lg size Avatar", () => {
    const url = "mock-image.jpg";
    render(<Avatar src={url} size="lg" alt="Image" />);

    const container = screen.getByTestId("avatar-container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(/lg/);
  });
});
