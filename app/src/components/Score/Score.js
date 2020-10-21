import React from "react";

const Score = ({ generateScore, score, numberOfTimesClicked }) => {
  return (
    <div className="App">
      <button type="submit" onClick={generateScore}>
        Generate score{" "}
      </button>
      <br />
      Your Score is {score}
      <br />
      No of Times Clicked {numberOfTimesClicked}
      <br />
      You have {10 - numberOfTimesClicked} click left
    </div>
  );
};

export default Score;
