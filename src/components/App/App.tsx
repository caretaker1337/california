import React from "react";

import { AppProvider } from "~/store";
import { Layout, Footer, Header } from "~/components";
import { GlobalStyle, ThemeProvider, theme } from "~/theme";

const App: React.FC = () => (
  <AppProvider>
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <Header />
      <Layout />
      <Footer />
    </ThemeProvider>
  </AppProvider>
);

export { App };
