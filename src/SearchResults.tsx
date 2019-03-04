import * as React from "react";
import { IWithContextProps, withContext } from "./context";
import { SearchResultItem } from "./SearchResultItem";

class SearchResultsComponent extends React.Component<
  Partial<IWithContextProps>
> {
  public componentDidMount(): void {
    this.setResults();
  }

  public render(): React.ReactNode {
    if (!this.props.context) {
      return null;
    }

    return (
      <ul>
        {this.props.context.results.map(item => (
          <li key={item.path}>
            <SearchResultItem {...item} />
          </li>
        ))}
      </ul>
    );
  }

  private setResults = () => {
    if (this.props.context) {
      this.props.context.setResults([
        {
          path: "path/1"
        },
        {
          path: "path/2"
        },
        {
          path: "path/3"
        },
        {
          path: "path/4"
        },
        {
          path: "path/5"
        }
      ]);
    }
  };
}

export const SearchResults = withContext(SearchResultsComponent);
