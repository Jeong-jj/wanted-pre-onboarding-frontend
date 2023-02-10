import { JoinPage } from "./pages/JoinPage/JoinPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <MainPage />
        {/* <JoinPage /> */}
        {/* <LoginPage /> */}
      </div>
    </>
  );
}

export default App;
