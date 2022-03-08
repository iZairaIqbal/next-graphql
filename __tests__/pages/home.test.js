import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../../pages";

describe("Home screen test", () => {
  it("should render home screen with all componets", () => {
    const {getByText} = render(<Home countries={[{id: 1, name: "Pakistan", code: "PK"}]} playlists={[{id: 2, name: "test playlist", tracks: [{track: {id: 1, name: "test song"}}], images: [{url: "https://test.png"}]}]} />);
    expect(getByText("Pakistan")).toBeInTheDocument();
    expect(getByText("PK")).toBeInTheDocument();
    expect(getByText("test playlist")).toBeInTheDocument();
    expect(getByText("test song")).toBeInTheDocument();
  });
});
