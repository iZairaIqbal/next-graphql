import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Song from "../../components/Song";

describe("Songs", () => {
  it("should render songs", () => {
    const {getByText} = render(<Song song={{name: "test song", id: 1}} />);
    expect(getByText("test song")).toBeInTheDocument();
  });
});
