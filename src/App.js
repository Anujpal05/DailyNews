import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import React from "react";
import News from "./Component/News.jsx";

const App = () => {
  const newapi = "b8eabb45ce7f4746a84929c7ef5af279"
  return (
    <div>
      <Navbar />
      <News pageSize={15} country="in" category="general" newsapi = {newapi} />
    </div>
  );
};

export default App;
