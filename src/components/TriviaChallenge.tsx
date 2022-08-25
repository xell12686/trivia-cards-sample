/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log("useEffect StarterComponent...");
  }, [screen]);

  if (loading) return <h3>Loading Questions...</h3>;
  if (error) return <h3>ERROR: {error}</h3>;

  return (
    <TriviaContext.Provider
      value={{ screen, setScreen, questions, results, setResults }}
    >
      <div className="Trivia">
        {screen === "welcome" && <Welcome />}
        {screen === "questions" && <Questions />}
        {screen === "results" && <Results />}
      </div>
    </TriviaContext.Provider>
  );
}
