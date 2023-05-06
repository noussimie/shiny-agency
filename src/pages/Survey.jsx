import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
//import { Outlet, Link } from 'react-router'

function Survey() {
  const {questionNumber}= useParams()
  return (
    <div>
       <h1>Questionnaire 🧮</h1>
       
       <Link to="client">Questionnaire Client </Link>
        <Link to="freelance">Questionnaire Freelance </Link>
        <Outlet/> 
        <h2>Question {questionNumber} </h2>

    </div>
  )
}

export default Survey
