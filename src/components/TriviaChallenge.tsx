/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import useFetch from "../helpers/useFetch";
import { TriviaContext, Screen } from "../helpers/TriviaContext";
import Results from "./Results";
import "./TriviaChallenge.css";
import Welcome from "./Welcome";
import Questions from "./Questions";

const TRIVIA_API_URL =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

type FetchedProps = {
  data: any;
  loading: boolean;
  error: string | null;
};

export default function TriviaChallenge() {
  const {
    data: questions,
    loading,
    error,
  }: FetchedProps = useFetch(TRIVIA_API_URL);
  const [screen, setScreen] = useState<Screen["name"]>("welcome");
  const [results, setResults] = useState<any[]>([]);
  let isDone = false;

  if (results && questions && results.length === questions.length - 1) {
    isDone = true;
  }

  if (loading) return <h3>Loading Questions...</h3>;
  if (error) return <h3>ERROR: {error}</h3>;

  return (
    <TriviaContext.Provider
      value={{ screen, setScreen, questions, results, setResults }}
    >
      <div className="Trivia">
        {!isDone ? (
          <>
            {screen === "welcome" && <Welcome />}
            {screen === "questions" && <Questions />}
          </>
        ) : (
          <Results />
        )}
      </div>
    </TriviaContext.Provider>
  );
}
