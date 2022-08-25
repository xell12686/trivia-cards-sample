import React, { useContext } from "react";
import { TriviaContext } from "../helpers/TriviaContext";

export default function Welcome() {
  const { setScreen } = useContext(TriviaContext);

  const handleSetScreen = () => {
    setScreen("questions");
  };

  return (
    <div className="Welcome">
      <h3>Welcome to the Trivia Challenge</h3>
      <p>You will be presented with 10 True of False questions</p>
      <p>Can you score 100%?</p>
      <button onClick={handleSetScreen} type="button">
        Begin
      </button>
    </div>
  );
}
