import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Country from "../../components/Country";
import Home from "../../pages";

describe("Countries", () => {
  it("should render country", () => {
    const {getByText} = render(<Home countries={[{name: "Pakistan", code: "PK"}]} playlists={[{name: "test playlist", images: [{url: "https://test.png"}]}]} />);
    expect(getByText("Pakistan")).toBeInTheDocument();
    expect(getByText("PK")).toBeInTheDocument();
    expect(getByText("test playlist")).toBeInTheDocument();
  });
});