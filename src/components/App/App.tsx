import React from "react";

import { Layout, Footer } from "~/components";
import { GlobalStyle, ThemeProvider, theme } from "~/theme";

const App: React.FC = () => (
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />
    <Layout />
    <Footer />
  </ThemeProvider>
);

export { App };
