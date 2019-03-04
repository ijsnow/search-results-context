import * as React from "react";
import { ISearchResult } from "./types";

export interface IAppContext {
  results: ISearchResult[];
  setResults: (results: ISearchResult[]) => void;
  setResultContent: (pathToUpdate: string, newContent: string) => void;
}

export const defaultValue: IAppContext = {
  results: [],
  setResultContent: () => {
    /* noop */
  },
  setResults: () => {
    /*noop*/
  }
};

const appContext = React.createContext<IAppContext>(defaultValue);

export const ContextProvider = appContext.Provider;
export const ContextConsumer = appContext.Consumer;

export interface IWithContextProps {
  context: IAppContext;
}

export function withContext<P extends {}>(
  ComposedComponent: React.ComponentType<P>
): React.ComponentClass<P> {
  return class WithContext extends React.Component<P> {
    public render(): React.ReactNode {
      return (
        <ContextConsumer>
          {context => <ComposedComponent {...this.props} context={context} />}
        </ContextConsumer>
      );
    }
  };
}
