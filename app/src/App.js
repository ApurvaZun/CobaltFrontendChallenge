import React from "react";
import "./App.css";

import Input from "./components/Input/Input.js";
import Score from "./components/Score/Score.js";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard.js";
import items from "./components/DummyData/DummyData.js";

function App() {
  const [score, setScore] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState(0);
  const [numberOfTimesClicked, setnumberOfTimesClicked] = React.useState(0);
  const [name, setName] = React.useState("apurva");
  const [data, setData] = React.useState({ items });

  React.useEffect(() => {
    fetch("https://codesandbox.io").catch(err => console.log(err));
  }, []);

  const handleOnChange = React.useCallback(event => {
    setName(event.target.value);
  }, []);

  const generateScore = React.useCallback(() => {
    const randomNumber = Math.floor(-100 + Math.random() * 201);
    const tempTotalScore = totalScore + randomNumber;

    setScore(randomNumber);
    setTotalScore(tempTotalScore);
    setnumberOfTimesClicked(numberOfTimesClicked + 1);

    if (numberOfTimesClicked >= 10) {
      setScore(0);
      setnumberOfTimesClicked(0);
      setTotalScore(0);
    }
  }, [numberOfTimesClicked, totalScore]);

  const updateScoreBoardData = React.useCallback(
    data => {
      const dataCopy = data.items || data;
      const removeMatchingName = dataCopy.filter(item => item.name !== name);

      const updateScoreData = [
        ...removeMatchingName,
        {
          name: name,
          totalPoints: totalScore,
          clicks: numberOfTimesClicked
        }
      ];
      setData(updateScoreData);
    },
    [score, data, name, numberOfTimesClicked]
  );

  const makePostAPICall = React.useCallback(() => {
    {
      /*call POST API Call to send the data */
    }
    fetch(`https://codesandbox.io/`, {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        score: score,
        countClick: numberOfTimesClicked
      })
    }).catch(err => console.log(err));

    {
      /* update the state data after the user cliks POST*/
    }
    updateScoreBoardData(data);
  }, [score, data, updateScoreBoardData, name, numberOfTimesClicked]);

  return (
    <div className="App">
      <h1>HighScoreApp</h1>
      <Input
        makePostAPICall={makePostAPICall}
        generateScore={generateScore}
        handleOnChange={handleOnChange}
        name={name}
      />
      <Score score={score} numberOfTimesClicked={numberOfTimesClicked} />
      <ScoreBoard data={data.items || data} />
    </div>
  );
}

export default App;
