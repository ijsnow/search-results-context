import * as React from "react";
import { ContextConsumer, IWithContextProps, withContext } from "./context";

class SearchResultsComponent extends React.Component<IWithContextProps, {}> {
  public render(): React.ReactNode {
    return (
      <ContextConsumer>
        {context => (
          <div>
            {context.results.map(({ path, content }) => (
              <div key={path}>
                <div>{path}</div>
                <code>{content}</code>
              </div>
            ))}
          </div>
        )}
      </ContextConsumer>
    );
  }
}

export const SearchResults = withContext<IWithContextProps>(
  SearchResultsComponent
);
