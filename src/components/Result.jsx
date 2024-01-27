import React from 'react'
import "./Result.css"

export default function Result({score, restart}) {

  //this gives out a separate message based on the score obtained by the user
  let message = ""
    if (score == 5) {
      message = "Goodness gracious ! You earned a perfect score :)"
    }
    else if (score <= 2) {
      message = "Poor score :( You can do much better!"
    }
    else if (score < 5) {
      message = "Close to perfect ! You're almost there"
    }

  return (
    // this is all about the final 
    // page that shows the user's score
    <div className='box'>
      <h2>CONGRATULATIONS</h2>
      <h3>your score: {score*20}%</h3>
      <h6>no of correct answers - {score}</h6>
      <h5>{message}</h5>
      <div id="restart" onClick={restart}>Retake</div>
    </div>
  )
}
