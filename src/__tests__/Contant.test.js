import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom"

test("should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading")
  //assertion
  expect(heading).toBeInTheDocument();

});
