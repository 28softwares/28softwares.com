import { ThemeProvider } from "./hooks/ThemeContext";
import { Home } from "./components/pages/Home";

export const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};
