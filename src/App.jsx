import React, { useState, useEffect } from "react";
import "./App.css";
import questions from "./questions.js";
import Heading from "./components/Heading.jsx";
import QuestionBox from "./components/QuestionBox";
import lightbg from "./assets/light.png";
import darkbg from "./assets/dark.png";
import sun from "./assets/sun.png";
import moon from "./assets/moon.png";
import logo from "./assets/favicon.png"

function App() {
  // making use of hooks in functional component

  // alternates the bg and sun/moon icon for dark & light mode
  const [toggle, handleToggle] = useState("light");
  let bgimage = toggle == "light" ? lightbg : darkbg;
  let iconimg = toggle == "light" ? sun : moon;

  // to handle the onclick functionality of the first page
  const [heading, showHeading] = useState(true);
  const [body, showBody] = useState(false);
  const startQuiz = () => {
    showHeading(false);
    showBody(true);
  };
  
  const restartQuiz = () => {
    showHeading(true);
    showBody(false);
  };
  
  const [loader, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500); // Replace with your desired loading time
  }, []);

  return (
    <>
      <div className="bgfull" style={{ backgroundImage: `url(${bgimage})` }}> 
        <div className="backdrop">
          <div className="top">
            <div>
              <img src={logo} alt="" />
              <h2>BrainyWiz</h2>
            </div>
            <span
            // to handle dark mode and light mode
              onClick={() => { handleToggle(toggle == "light" ? "dark" : "light") }}>
              {/* icon control */}
              <img src={iconimg} alt="icon" />
            </span>
          </div>
        {loader && (
          <div id="loadingbg">
            <div id="loader"></div>
          </div>
        )}
          {/* sending props for onclick functionality of the start page*/}
          {heading ? <Heading tostartquiz={() => { startQuiz() }}/> : null}

          {/* questionbox has the questions with options content, will render only when true */}
          {body ? <QuestionBox torestartquiz={() => restartQuiz()} /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
