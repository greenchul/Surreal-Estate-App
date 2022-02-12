import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  test("NavBar renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("NavBar links render correctly", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const linkElement1 = screen.getByText("View Properties");
    const linkElement2 = screen.getByText("Add a property");

    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
  });

  test("logo renders correctly", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const logo = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });
});
