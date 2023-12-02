    //@ts-nocheck
import React, { MouseEventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Nav from './components/Nav/Nav'
import Options from './components/Form/Options/Options';
import data from "./data/data.json"
import { clickOptions } from '@testing-library/user-event/dist/click';

const quizNames = [ "HTML", "CSS", "JavaScript","Accessibility" ]

function App() {

  let selectedQuiz:string = ""

  const selectQuiz = (event: MouseEventHandler<HTMLButtonElement>) => {
    selectedQuiz = (data?.quizzes.filter((q:any) => q.title == event.target.name)).shift()
    return selectedQuiz
  }

  return (
    <div className="App">
      <Nav/>
      <div className='question-container'>  
      </div>
      <div className='Options-container'>
        <h1>Pick a Subject to get Started</h1>
        {quizNames.map((name:string) => <Button text={name} onClick={(e) => selectQuiz(e)} />)}
      <Options quiz={selectedQuiz}/>
      </div>
     <Button text="Submit Answer" onClick={(e)=> console.log("clicked", e)}/>
    </div>
  );
}

export default App;
