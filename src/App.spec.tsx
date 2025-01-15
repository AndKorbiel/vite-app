import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should render component properly", () => {
    render(<App />)
    expect(screen.getByText("Vite + React")).toBeDefined();
    expect(screen.getByText("count is 0")).toBeDefined();
  });
});