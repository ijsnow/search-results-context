import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

import { ContextProvider, defaultValue } from "./context";
import { SearchResults } from "./SearchResults";
import { ISearchResult } from "./types";

interface IState {
  results: ISearchResult[];
  setResults: (results: ISearchResult[]) => void;
  setResultContent: (pathToUpdate: string, newContent: string) => void;
}

class App extends React.Component<{}, IState> {
  public render() {
    return (
      <ContextProvider
        value={{
          ...defaultValue,
          ...this.state,
          setResultContent: this.setResultContent,
          setResults: this.setResults
        }}
      >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <SearchResults />
        </div>
      </ContextProvider>
    );
  }

  private setResults = (results: ISearchResult[]) => {
    this.setState({ results });
  };

  private setResultContent = (pathToUpdate: string, newContent: string) => {
    this.setState(({ results }) => ({
      results: results.map(({ path, content }) =>
        path === pathToUpdate
          ? { path, content: newContent }
          : { path, content }
      )
    }));
  };
}

export default App;
