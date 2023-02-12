import { Route, Routes } from "react-router-dom";

import { JoinPage } from "./pages/JoinPage/JoinPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { TodoPage } from "./pages/TodoPage/TodoPage";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="signup" element={<JoinPage />} />
          <Route path="signin" element={<LoginPage />} />
          <Route path="todo" element={<TodoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
