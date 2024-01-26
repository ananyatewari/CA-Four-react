import React, { useState } from "react";
import questions from "../questions";
import Result from "./Result";
import "./QuestionBox.css"

export default function QuestionBox({ torestartquiz }) {
  const [current, switchQuestions] = useState(0);
  const [result, showResult] = useState(false);
  const [score, checkScore] = useState(0);
  const [highlight, showHighlight] = useState(true);

  const eachOption = (i) => {
    if (i == 4) {
      showResult(true);
    } else if (i < 5) {
      switchQuestions(i + 1);
    }
  };

  const showScore = (i) => {
    if (questions[current].options[i].isCorrect) {
      checkScore(score + 1);
    }
  };

  let colour = highlight ? "darkblue" : "red";
  const changeColour = () => {
    highlight ? showHighlight(false) : showHighlight(true);
  };

  return (
    <>
      <div id="parent">
        {result ? (
          <Result score={score} restart={torestartquiz} />
        ) : (
          <div className="box">
            <div id="counter">
              question {current + 1} of {questions.length}
            </div>
            <div id="question" style={{ color: colour }}>
              {questions[current].text}
            </div>
            {questions[current].options.map((option, i) => {
              return (
                <div
                  className="option"
                  key={i}
                  onClick={() => {
                    eachOption(current);
                    showScore(i);
                  }}
                >
                  {option.text}
                </div>
              );
            })}

            <div id="highlight" onClick={changeColour}>
              {highlight ? "Highlight" : "Unhighlight"}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
