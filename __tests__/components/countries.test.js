import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Country from "../../components/Country";

describe("Countries", () => {
  it("should render country", () => {
    const {getByText} = render(<Country country={{name: "Pakistan", code: "PK"}} />);
    expect(getByText("Pakistan")).toBeInTheDocument();
    expect(getByText("PK")).toBeInTheDocument();

  });
});