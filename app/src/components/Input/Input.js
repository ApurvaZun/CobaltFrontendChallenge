import React from "react";

const Input = ({ makePostAPICall, handleOnChange, name }) => {
  return (
    <div className="App">
      <input
        name="name"
        type="text"
        value={name}
        placeholder="enter your name"
        onChange={event => handleOnChange(event)}
      />
      <button type="submit" onClick={makePostAPICall}>
        Post request{" "}
      </button>
    </div>
  );
};

export default Input;
