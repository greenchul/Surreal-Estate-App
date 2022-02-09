import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  test("NavBar renders correctly", () => {
    const { asFragment } = render(<NavBar />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("NavBar links render correctly", () => {
    render(<NavBar />);
    const linkElement1 = screen.getByText("View Properties");
    const linkElement2 = screen.getByText("Add a property");

    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
  });
});
