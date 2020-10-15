import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders page header", () => {
  const { getByText } = render(<App />);
  expect(getByText("React component test")).toBeInTheDocument();
});
