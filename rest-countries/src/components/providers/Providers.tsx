import { PropsWithChildren, FC } from "react";
import { ThemeProvider, FilterProvider, SearchProvider } from "../../context";
import { Router } from "./Router";

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <Router>
        <FilterProvider>
          <SearchProvider>{children}</SearchProvider>
        </FilterProvider>
      </Router>
    </ThemeProvider>
  );
};

type Props = PropsWithChildren;
