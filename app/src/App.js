import React from "react";
import "./App.css";

import Input from "./components/Input/Input.js";
import Score from "./components/Score/Score.js";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard.js";
import items from "./components/DummyData/DummyData.js";

function App() {
  const [score, setScore] = React.useState(0);
  const [numberOfTimesClicked, setnumberOfTimesClicked] = React.useState(0);
  const [name, setName] = React.useState("apurva");
  const [data, setData] = React.useState({ items });

  React.useEffect(() => {
    fetch("https://codesandbox.io").catch(err => console.log(err));
  }, []);

  const handleOnChange = event => {
    setName(event.target.value);
  };

  const generateScore = () => {
    const randomNumber = Math.floor(-100 + Math.random() * 201);

    setScore(randomNumber);
    if (numberOfTimesClicked >= 10) {
      setnumberOfTimesClicked(0);
    } else {
      setnumberOfTimesClicked(numberOfTimesClicked + 1);
    }
    const updateScoreData = [
      ...(data.items || data),
      {
        name: name,
        totalPoints: randomNumber,
        clicks: numberOfTimesClicked + 1
      }
    ];
    setData(updateScoreData);
  };

  const makePostAPICall = () => {
    console.log(name);
    const url = `https://codesandbox.io/`;
    fetch(url, {
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
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Input
        makePostAPICall={makePostAPICall}
        handleOnChange={handleOnChange}
        name={name}
      />

      <Score
        generateScore={generateScore}
        score={score}
        numberOfTimesClicked={numberOfTimesClicked}
      />
      <br />
      <ScoreBoard data={data.items || data} />
    </div>
  );
}

export default App;
