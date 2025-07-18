import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { Image } from "./Image";

describe("Image tests", () => {
  afterEach(() => {
    cleanup();
  });
  test("render Image", () => {
    const url = "test-image.jpg";
    render(<Image src={url} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", url);
  });
  test("rerender Image when receiving a new url", () => {
    const url = "test-image.jpg";
    const { rerender } = render(<Image src={url} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", url);

    const url2 = "new-image.jpg";
    rerender(<Image src={url2} />);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", url2);
  });
  test("render fallback Image", () => {
    const url = "test-image.jpg";
    const fallbackImage = "fallback.jpg";
    render(<Image src={url} fallback={fallbackImage} />);
    const img = screen.getByRole("img");
    fireEvent.error(img);
    expect(img).toHaveAttribute("src", fallbackImage);
  });
  test("props Image", () => {
    const url = "test-image.jpg";
    render(<Image src={url} alt="IMG" className="img__class" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", "IMG");
    expect(img).toHaveClass("img__class");
  });
});
