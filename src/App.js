
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Body from "./pages/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
    {/* 헤더 추가 */}
    <Header />
    {/* 메인 콘텐츠 영역 */}
    <div>
     <Body/> 
    </div>
    {/* 풋터 추가 */}
    <Footer />
</Router>
  )
}
export default App;
