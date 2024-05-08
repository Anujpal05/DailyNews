import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import React, { useState } from "react";
import News from "./Component/News.jsx";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {
  
  const newapi = process.env.REACT_APP_NEWS_API_KEY
  const [progress, setProgress] = useState(0);

  const setprogress = (progress)=>{
    setProgress(progress)
  }

  return (
    <div>
         
      <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
                <Route exact path="/" element ={<News setProgress={setprogress} key="general" pageSize={15} country="in" category="general" newsapi = {newapi} />} />
                <Route exact path="/sports" element = {<News setProgress={setprogress} key="sports" pageSize={15} country="in" category="sports" newsapi = {newapi} />} />
                <Route exact path="/business" element = {<News setProgress={setprogress} key="business" pageSize={15} country="in" category="business" newsapi = {newapi} />}/>
                <Route exact path="/Entertainment" element = {<News setProgress={setprogress} key="Entertainment" pageSize={15} country="in" category="Entertainment" newsapi = {newapi} />} />
                <Route exact path="/health" element = {<News setProgress={setprogress} key="health" pageSize={15} country="in" category="health" newsapi = {newapi} />} />
                <Route exact path="/science" element = {<News setProgress={setprogress} key="science" pageSize={15} country="in" category="science" newsapi = {newapi} />} />
                <Route exact path="/technology" element = {<News setProgress={setprogress} key="technology" pageSize={15} country="in" category="technology" newsapi = {newapi} />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
};

export default App;