import React from "react";
import { render } from "@testing-library/react";
import Properties from "../components/Properties";

describe("Properties Component", () => {
  test("component renders correctly", () => {
    const { asFragment } = render(<Properties />);

    expect(asFragment()).toMatchSnapshot();
  });
});
