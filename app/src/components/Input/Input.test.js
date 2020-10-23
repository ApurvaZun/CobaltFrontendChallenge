import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";
import Score from "../Score/Score";

it("Input Component renders Correctly", () => {
  const { queryByRole, getByPlaceholderText } = render(<Input />);

  expect(getByPlaceholderText("enter your name")).toBeTruthy();
  expect(queryByRole("generateScore")).toBeTruthy();
  expect(queryByRole("submitPost")).toBeTruthy();
});

it("Input box updates on change", () => {
  const handleOnChange = jest.fn(value => {});

  const { getByPlaceholderText } = render(
    <Input handleOnChange={handleOnChange} />
  );

  const inputValue = getByPlaceholderText("enter your name");

  fireEvent.change(inputValue, { target: { value: "test" } });

  expect(inputValue.value).toBe("test");
});

it("generate score button works correctly", () => {
  const generateScore = jest.fn();

  const { queryByRole } = render(<Input generateScore={generateScore} />);

  fireEvent.click(queryByRole("generateScore"));
  expect(generateScore).toHaveBeenCalled();
});

it("Post submit button works correctly", () => {
  const makePostAPICall = jest.fn();

  const { queryByRole } = render(<Input makePostAPICall={makePostAPICall} />);

  fireEvent.click(queryByRole("submitPost"));
  expect(makePostAPICall).toHaveBeenCalled();
});
