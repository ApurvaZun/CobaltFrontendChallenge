import React from "react";

const Input = React.memo(
  ({ makePostAPICall, generateScore, handleOnChange, name }) => {
    return (
      <div>
        <div className="input-field">
          <label>
            Name &nbsp;&nbsp;
            <input
              name="name"
              type="text"
              value={name}
              placeholder="enter your name"
              onChange={handleOnChange}
            />
          </label>
        </div>

        <button
          role="generateScore"
          className="generate-score"
          type="submit"
          onClick={generateScore}
        >
          Generate score{" "}
        </button>

        <button
          role="submitPost"
          className="submit-post"
          type="submit"
          onClick={makePostAPICall}
        >
          Post request{" "}
        </button>
      </div>
    );
  }
);

export default Input;
