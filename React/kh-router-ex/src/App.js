import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MyPage from "./pages/MyPage";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Test } from "./Test";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/About" element={<About />} />
    //       <Route path="/MyPage" element={<MyPage />} />
    //       <Route path="/Setting" element={<Setting />} />
    //       <Route path="/Profile/:userName" element={<Profile />} />
    //       <Route path="/articles" element={<Articles />}>
    //         <Route path="/articles:id" element={<Article />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </Router>
    <Test name = "예제 이름">
      예제 자식 요소
    </Test>
  );
}

export default App;
