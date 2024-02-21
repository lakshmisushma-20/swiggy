import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("It should load cntact us companent", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
test("It should load button inside contact  companent", () => {
  render(<Contact />);

  const button = screen.getByText("SUBMIT");

  expect(button).toBeInTheDocument();
});
