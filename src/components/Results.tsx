import React, { useContext } from "react";
import { TriviaContext } from "../helpers/TriviaContext";

export default function Results() {
  const { setScreen, results } = useContext(TriviaContext);
  const handleSetScreen = () => {
    setScreen("questions");
  };
  return (
    <div className="Results">
      <h3>You scored</h3>
      <ul>
        {results.map((item: any) => (
          <span key={item.question}>{item.question}</span>
        ))}
      </ul>

      <button onClick={handleSetScreen} type="button">
        Play again?
      </button>
    </div>
  );
}
