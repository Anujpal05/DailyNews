import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import React from "react";
import News from "./Component/News.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <News pageSize={15} country="in" category="general" />
    </div>
  );
};

export default App;
