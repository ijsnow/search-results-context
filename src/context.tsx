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

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withContext<P extends IWithContextProps>(
  ComposedComponent: React.ComponentClass<P> | React.FunctionComponent<P>
): React.ComponentClass<Omit<P, keyof IWithContextProps>> {
  return class WithContext extends React.Component<
    Omit<P, keyof IWithContextProps>
  > {
    public render(): React.ReactNode {
      return (
        <ContextConsumer>
          {context => <ComposedComponent {...this.props} context={context} />}
        </ContextConsumer>
      );
    }
  };

  // return (props: Omit<P, keyof IWithContextProps>) => (
  //   <ContextConsumer>
  //     {context => <ComposedComponent {...props} context={context} />}
  //   </ContextConsumer>
  // );
}
