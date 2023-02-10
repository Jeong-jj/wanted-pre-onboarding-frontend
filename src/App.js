import { JoinPage } from "./pages/JoinPage/JoinPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        {/* <JoinPage /> */}
        <LoginPage />
      </div>
    </>
  );
}

export default App;
