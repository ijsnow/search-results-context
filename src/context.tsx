import * as React from "react";
import { ISearchResult } from "./types";

export interface IAppContext {
  results: ISearchResult[];
  setResults: (results: ISearchResult[]) => void;
}

export const defaultValue: IAppContext = {
  results: [],
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

export function withContext<ComposedComponentProps extends IWithContextProps>(
  ComposedComponent: React.ComponentType<ComposedComponentProps>
) {
  return (props: ComposedComponentProps) => (
    <ContextConsumer>
      {context => <ComposedComponent {...props} context={context} />}
    </ContextConsumer>
  );
}
