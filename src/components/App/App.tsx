import React from "react";

import { AppProvider } from "~/store";
import { Layout, Footer } from "~/components";
import { GlobalStyle, ThemeProvider, theme } from "~/theme";

const App: React.FC = () => (
  <AppProvider>
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <Layout />
      <Footer />
    </ThemeProvider>
  </AppProvider>
);

export { App };
