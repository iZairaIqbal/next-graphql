import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Playlist from "../../components/Playlist";

describe("Playlists", () => {
  it("should render playlists", () => {
    const {getByText} = render(<Playlist playlist={{id: 1, name: "test playlist", tracks: [{track: {id: 1, name: "test song"}}], images: [{url: "https://test.png"}]}} />);
    expect(getByText("test playlist")).toBeInTheDocument();
  });
});
