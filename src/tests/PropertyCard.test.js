import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard component", () => {
  const validProps = {
    title: "test title",
    type: "test type",
    bathrooms: 1,
    bedrooms: 2,
    price: 100000,
    city: "test city",
    email: "test@test.com",
  };
  test("component renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("title renders correctly", () => {
    render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    const titleElement = screen.getByText("test title");

    expect(titleElement).toBeInTheDocument();
  });

  test("type and city render correctly", () => {
    render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    const typeElement = screen.getByText("test type - test city");

    expect(typeElement).toBeInTheDocument();
  });

  test("bathrooms renders correctly", () => {
    render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    const bathroomElement = screen.getByText("1");

    expect(bathroomElement).toBeInTheDocument();
  });

  test("bedroom element renders correctly", () => {
    render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    const bedroomElement = screen.getByText("2");

    expect(bedroomElement).toBeInTheDocument();
  });

  test("price renders correctly", () => {
    render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    const priceElement = screen.getByText("100000");

    expect(priceElement).toBeInTheDocument();
  });

  test("email link renders correctly", () => {
    render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    const emailElement = screen.getByText("Email");

    expect(emailElement).toBeInTheDocument();
  });
});
