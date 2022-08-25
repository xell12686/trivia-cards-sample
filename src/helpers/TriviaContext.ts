import { createContext, Dispatch } from "react";

export interface Screen {
  name: "welcome" | "questions" | "results";
}

export interface TriviaContextInterface {
  screen: Screen["name"];
  setScreen: Dispatch<any>;
  questions: any[];
  results: any[];
  setResults: Dispatch<any>;
}

const defaultState: TriviaContextInterface = {
  screen: "welcome",
  setScreen: () => {},
  questions: [],
  results: [],
  setResults: () => {},
};

export const TriviaContext =
  createContext<TriviaContextInterface>(defaultState);
