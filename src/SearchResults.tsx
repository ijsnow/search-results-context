import * as React from "react";
import { fetchResults } from "./actions";
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
        {this.props.context.state.results.map(item => (
          <li key={item.path}>
            <SearchResultItem {...item} />
          </li>
        ))}
      </ul>
    );
  }

  private setResults = () => {
    if (this.props.context) {
      this.props.context.update(fetchResults);
    }
  };
}

export const SearchResults = withContext(SearchResultsComponent);
