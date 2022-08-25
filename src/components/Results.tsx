import React, { useContext } from "react";
import DOMPurify from "isomorphic-dompurify";
import { TriviaContext } from "../helpers/TriviaContext";

export default function Results() {
  const { setScreen, results, setResults } = useContext(TriviaContext);
  const handleRestart = () => {
    setResults([]);
    setScreen("questions");
  };

  const corrects = results.reduce((accumulator, obj) => {
    if (obj.isCorrect) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  return (
    <div className="Results">
      <h3>
        You scored <br />
        {corrects} / {results.length}
      </h3>
      <ul>
        {results.map((item: any) => (
          <li
            key={item.question}
            className={`${item.isCorrect ? "correct" : "wrong"}`}
          >
            <h4
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.question),
              }}
            />
          </li>
        ))}
      </ul>

      <button onClick={handleRestart} type="button">
        Play again?
      </button>
    </div>
  );
}
