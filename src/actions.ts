import { IAppContext } from "./context";

export const fetchResults = () => ({
  results: [
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
  ]
});

export const fetchResultContent = (
  pathToUpdate: string,
  newContent: string
) => ({ results }: IAppContext["state"]) => ({
  results: results.map(({ path, content }) =>
    path === pathToUpdate
      ? {
          content: newContent,
          path
        }
      : { path, content }
  )
});
