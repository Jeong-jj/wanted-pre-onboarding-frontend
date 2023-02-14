import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "styles/Theme";

import { JoinPage } from "./pages/JoinPage/JoinPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { TodoPage } from "./pages/TodoPage/TodoPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="signup" element={<JoinPage />} />
          <Route path="signin" element={<LoginPage />} />
          <Route path="todo" element={<TodoPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
