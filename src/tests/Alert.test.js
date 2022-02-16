import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert component", () => {
  const validProps = {
    initial: {
      message: "",
      isSuccess: true,
    },
    error: {
      message: "Error",
      isSuccess: false,
    },
    success: {
      message: "Success",
      isSuccess: true,
    },
  };

  test("renders initial state correctly", () => {
    const { asFragment } = render(
      <Alert
        message={validProps.initial.message}
        success={validProps.initial.isSuccess}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  test("renders correct error message", () => {
    const { asFragment, getByText } = render(
      <Alert
        message={validProps.error.message}
        success={validProps.error.isSuccess}
      />
    );
    const renderedMessage = getByText("Error");

    expect(asFragment()).toMatchSnapshot();
    expect(renderedMessage).toBeInTheDocument();
    expect(renderedMessage).toHaveClass("alert error");
  });
  test("renders correct success message", () => {
    const { asFragment, getByText } = render(
      <Alert
        message={validProps.success.message}
        success={validProps.success.isSuccess}
      />
    );
    const renderedMessage = getByText("Success");

    expect(asFragment()).toMatchSnapshot();
    expect(renderedMessage).toBeInTheDocument();
    expect(renderedMessage).toHaveClass("alert success");
  });
});
