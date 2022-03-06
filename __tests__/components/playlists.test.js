import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Playlist from "../../components/Playlist";
// Using render and screen from test-utils.js instead of
// @testing-library/react

describe("Playlists", () => {
  it("should render playlists", () => {
    const {getByText} = render(<Playlist playlist={{name: "test playlist", images: [{url: "https://test.png"}]}} />);
    expect(getByText("test playlist")).toBeInTheDocument();
  });
});