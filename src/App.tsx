import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme/dark";
import { lightTheme } from "./styles/theme/light";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
