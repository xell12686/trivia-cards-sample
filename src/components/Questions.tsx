import React, { useContext, useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import { TriviaContext } from "../helpers/TriviaContext";

export default function Questions() {
  const { questions, results, setResults } = useContext(TriviaContext);
  const [itemIndex, setItemIndex] = useState(0);
  const item = questions[itemIndex];

  const handleAnswer = (answer: string) => {
    const resultItem = {
      question: item.question,
      isCorrect: item.correct_answer === answer,
    };
    setResults([...results, resultItem]);
    setItemIndex(itemIndex + 1);
  };

  return (
    <div className="Questions">
      <h3>{item.category}</h3>
      <div className="question">
        <h4
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(item.question),
          }}
        />
        <div className="answer">
          <button onClick={() => handleAnswer("True")} type="button">
            True
          </button>
          <button onClick={() => handleAnswer("False")} type="button">
            False
          </button>
        </div>
      </div>
      <p className="progress">
        {itemIndex + 1} of {questions.length}
      </p>
    </div>
  );
}
