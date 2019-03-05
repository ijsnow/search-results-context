import * as React from "react";
import { fetchResultContent } from "./actions";
import { IWithContextProps, withContext } from "./context";

interface IProps extends Partial<IWithContextProps> {
  path: string;
  content?: string;
}

class SearchResultItemComponent extends React.Component<IProps> {
  public componentDidMount(): void {
    setTimeout(this.setResultContent, Math.random() * 1000);
  }

  public render(): React.ReactNode {
    return (
      <div>
        <div>{this.props.path}</div>
        {this.props.content && <code>{this.props.content}</code>}
      </div>
    );
  }

  private setResultContent = () => {
    if (this.props.context) {
      this.props.context.update(
        fetchResultContent(
          this.props.path,
          "foo bar baz foo bar baz foo bar baz"
        )
      );
    }
  };
}

export const SearchResultItem = withContext(SearchResultItemComponent);
