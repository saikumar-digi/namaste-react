import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("conatact us test case", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button insode contact us component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button")
    const button = screen.getByText("Submit");

    //assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input insode contact us component", () => {
    render(<Contact />);
    //querying
    const input_box = screen.getAllByRole("textbox");

    //assertion
    expect(input_box.length).toBe(2);
  });
});
