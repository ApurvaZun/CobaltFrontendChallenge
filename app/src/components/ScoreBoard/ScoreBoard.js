import React from "react";

const ScoreBoard = React.memo(({ data }) => {
  const sortScoreData = data.sort(function(a, b) {
    return b.totalPoints - a.totalPoints;
  });

  return (
    <div className="score-board">
      <div className="table-head">
        <h4>Name</h4>
        <h4>Score</h4>
        <h4>No. of Clicks</h4>
        <h4>Average Score</h4>
      </div>
      {sortScoreData.slice(0, 9).map(item => {
        const avgScore = Math.floor(item.totalPoints / item.clicks);
        return (
          <div key={item.name} className="table-row">
            <div>{item.name}</div>
            <div>{item.totalPoints}</div>
            <div>{item.clicks}</div>
            <div>{avgScore}</div>
          </div>
        );
      })}
    </div>
  );
});

export default ScoreBoard;
