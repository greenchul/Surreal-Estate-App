import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddProperty from "../components/AddProperty";

describe("AddProperty component", () => {
  test("component renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("title input renders correctly", () => {
    render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    const titleElement = screen.getByPlaceholderText("House for sale");

    expect(titleElement).toBeInTheDocument();
  });

  test("type input renders correctly", () => {
    render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    const typeElement = screen.getByDisplayValue("Flat");

    expect(typeElement).toBeInTheDocument();
  });

  test("bedrooms input renders correctly", () => {
    render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    const bedroomsElement = screen.getByPlaceholderText("4");

    expect(bedroomsElement).toBeInTheDocument();
  });

  test("bathrooms input renders correctly", () => {
    render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    const bathroomsElement = screen.getByPlaceholderText("1");

    expect(bathroomsElement).toBeInTheDocument();
  });

  test("price input renders correctly", () => {
    render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    const priceElement = screen.getByDisplayValue("0");

    expect(priceElement).toBeInTheDocument();
  });

  test("city input renders correctly", () => {
    render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    const cityElement = screen.getByDisplayValue("Manchester");

    expect(cityElement).toBeInTheDocument();
  });

  test("email input renders correctly", () => {
    render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    const emailElement = screen.getByPlaceholderText("hello@email.com");

    expect(emailElement).toBeInTheDocument();
  });
});
