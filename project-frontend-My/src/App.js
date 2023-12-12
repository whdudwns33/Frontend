import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import GlobalStyle from "./style/GlobalStyle";
import KakaoLogin from "./api/KakaoLoginApi";
import MainPage from "./pages/MainPage";
import Header from "./style/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* 임시 */}
          <Route path="/main" element={<MainPage></MainPage>} />
          <Route path="/" element={<LoginPage></LoginPage>} />
          <Route path="/signup" element={<SignupPage></SignupPage>} />
          <Route path="/kakao" element={<KakaoLogin></KakaoLogin>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
