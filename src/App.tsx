import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

import { ContextProvider, IAppContext } from "./context";
import { SearchResults } from "./SearchResults";
import { ISearchResult } from "./types";

interface IState {
  results: ISearchResult[];
}

class App extends React.Component<{}, IState> {
  public render() {
    return (
      <ContextProvider
        value={{
          state: this.state,
          update: this.updateContext
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

  private updateContext: IAppContext["update"] = fn => {
    this.setState(state => {
      const update = fn(state);

      return {
        ...state,
        ...update
      };
    });
  };
}

export default App;
