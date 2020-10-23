import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ScoreBoard from "./ScoreBoard";

const user = [{ name: "Jane Doe", totalPoints: 9, clicks: 5 }];

test("download dummy data from internets", async () => {
  const fetchUser = () =>
    Promise.resolve({
      args: { user }
    });
  const { findByText } = render(<ScoreBoard data={user} />);
  expect(await findByText("Jane Doe")).toBeInTheDocument();
});
