import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "pages";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const headingEl = screen.getByRole("heading");

    expect(headingEl).toHaveTextContent(/hi/);
  });
});
