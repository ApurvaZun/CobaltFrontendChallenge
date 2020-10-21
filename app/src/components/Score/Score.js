import React from "react";

const Score = React.memo(({ score, numberOfTimesClicked }) => {
  return (
    <div>
      <div className="score-description">
        <p>Your Score is {score}</p>
        <p>No of Times Clicked {numberOfTimesClicked}</p>
        <p>You have {10 - numberOfTimesClicked} clicks left</p>
      </div>
    </div>
  );
});

export default Score;
