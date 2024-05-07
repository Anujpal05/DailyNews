import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import React from "react";
import News from "./Component/News.jsx";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


const App = () => {
  
  const newapi = process.env.REACT_APP_NEWS_API_KEY

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
                <Route exact path="/" element ={<News key="general" pageSize={15} country="in" category="general" newsapi = {newapi} />} />
                <Route exact path="/sports" element = {<News key="sports" pageSize={15} country="in" category="sports" newsapi = {newapi} />} />
                <Route exact path="/business" element = {<News key="business" pageSize={15} country="in" category="business" newsapi = {newapi} />}/>
                <Route exact path="/Entertainment" element = {<News key="Entertainment" pageSize={15} country="in" category="Entertainment" newsapi = {newapi} />} />
                <Route exact path="/health" element = {<News key="health" pageSize={15} country="in" category="health" newsapi = {newapi} />} />
                <Route exact path="/science" element = {<News key="science" pageSize={15} country="in" category="science" newsapi = {newapi} />} />
                <Route exact path="/technology" element = {<News key="technology" pageSize={15} country="in" category="technology" newsapi = {newapi} />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
};

export default App;