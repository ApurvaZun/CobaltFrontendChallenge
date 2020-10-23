import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("renders title of App correctly", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/HighScoreApp/i);
  expect(linkElement).toBeInTheDocument();
});

it("render score component correctly", () => {
  const { getByText } = render(<App />);
  const scoreElement = getByText(/Your Score is/i);
  expect(scoreElement).toBeInTheDocument();
});

it("generate score button works correctly", () => {
  const generateScore = jest.fn();

  const { queryByRole, getByText } = render(<App />);

  fireEvent.click(queryByRole("generateScore"));

  const scoreElement1 = getByText(/No of Times Clicked 1/i);

  expect(scoreElement1).toBeInTheDocument();

  fireEvent.click(queryByRole("generateScore"));

  const scoreElement2 = getByText(/No of Times Clicked/i);

  expect(scoreElement2).toBeInTheDocument();
});
