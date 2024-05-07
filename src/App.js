import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import React from "react";
import News from "./Component/News.jsx";


const App = () => {
  const newapi = process.env.REACT_APP_NEWS_API_KEY
  return (
    <div>
      <Navbar />
      <News pageSize={15} country="in" category="general" newsapi = {newapi} />
    </div>
  );
};

export default App;