import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Nav from './components/Nav/Nav'
import Options from './components/Form/Options/Options';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='question-container'>  

      </div>
      <div className='Options-container'>
      <Options/>
      </div>
     <Button text="Submit Answer" onClick={(e)=> console.log("clicked", e)}/>
    </div>
  );
}

export default App;
