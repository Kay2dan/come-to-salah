import React from "react";
import { create } from "react-test-renderer";
import Header from "../Header";

describe("Test the Header component, ", () => {
  it("renders correctly", () => {
    const dom = create(
      <Header
        activeNavbarItem=""
        menuToggleHandler={() => console.log("hi")}
        menuVisibility={false}
      />
    ).toJSON();
    expect(dom).toMatchSnapshot();
  });
});
