import * as React from "react";
import { ISearchResult } from "./types";

export interface IAppState {
  results: ISearchResult[];
}

export interface IAppContext {
  state: IAppState;
  update: (fn: (state: IAppState) => Partial<IAppState>) => void;
}

const appContext = React.createContext<IAppContext | null>(null);

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
          {context =>
            context && <ComposedComponent {...this.props} context={context} />
          }
        </ContextConsumer>
      );
    }
  };
}
