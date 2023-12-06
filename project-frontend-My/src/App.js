import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./style/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>} />
          <Route path="/signup" element={<SignupPage></SignupPage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
