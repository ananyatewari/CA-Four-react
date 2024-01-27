import React, { useState } from "react";
import questions from "../questions";
import Result from "./Result";
import "./QuestionBox.css"

export default function QuestionBox({ torestartquiz }) {
  // making use of hooks to handle functional components

  const [current, switchQuestions] = useState(0); //change question when an option is clicked
  const [result, showResult] = useState(false); //last window to show result
  const [score, checkScore] = useState(0); //calculate score
  const [highlight, showHighlight] = useState(true); //this is to highlight the question

  //logic to switch questions 
  // and show result after the last question
  const eachOption = (i) => {
    if (i == 4) {
      showResult(true)
    } else if (i < 5) {
      switchQuestions(i + 1)
    }
  };

  // logic to calculate the score
  const showScore = (i) => {
    if (questions[current].options[i].isCorrect) {
      checkScore(score + 1)
    }
  };

  // logic to manage the colour 
  // of the question onclick of the button 
  let colour = highlight ? "darkblue" : "red"
  const changeColour = () => {
    highlight ? showHighlight(false) : null
  };
  const removeHighlight = () => {
    showHighlight(true)
  }

  return (
    <>
      <div id="parent">
        {result ? <Result score={score} restart={torestartquiz} /> : (

        // if the condition for showing result is false, it will show the below code
          <div className="box">
            <div id="counter">
              question {current + 1} of {questions.length} 
            </div>
            <div id="question" style = {{ color: colour }}>
              {questions[current].text}
            </div>

          {/* mapping through the entire list of */}
          {/* options for each question of index i to display it */}
            {questions[current].options.map((option, i) => {
              return (
                <div className="option" key={i} onClick={() => {
                    eachOption(current)
                    showScore(i)
                }}>
                  {option.text}
                </div>
              )
            })}

          <div className="buttons">
            {/* to chnage/manage the colour of the question */}
            <div className="highlight" onClick={changeColour}>
              Highlight
            </div>
            <div className="highlight" onClick={removeHighlight}>
              Remove Highlight
            </div>
          </div>
          </div>

        )} {/* end of the false result condition */}

      </div>
    </>
  )
}
