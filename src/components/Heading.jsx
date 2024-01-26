import React from 'react'
import "./Heading.css"

export default function Heading({tostartquiz}) {
  return (
    <div className="heading" onClick={tostartquiz}>
        <h1>CLICK HERE TO START&nbsp;!</h1>
    </div>
  )
}