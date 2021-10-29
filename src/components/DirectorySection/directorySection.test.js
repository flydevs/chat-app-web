import { expect } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import React, { Component } from "react";
import "@testing-library/jest-dom";
import DirectorySection from ".";

test("directory header to be rendered", () => {
  render(<DirectorySection />);
  const header = screen.getByText(/Directory/i);
  expect(header).toBeInTheDocument();
});
test("MoreButton to be rendered", () => {
  render(<DirectorySection />);
  const More = screen.getByTestId("MoreButton");
  expect(More).toBeInTheDocument();
});
