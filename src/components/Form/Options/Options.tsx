import "./Options.css"
import data from "../../../data/data.json"
import { useState } from "react"
//@ts-ignore
const Options = ({quiz}:string): JSX.Element  => {
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [result, setResult] =  useState("")
    let htmlQuiz = (data.quizzes.filter((q:any) => q.title == quiz)).shift()
    const submitAnswer = () => {
      selectedAnswer == htmlQuiz?.questions[0].answer?
        setResult("correct"): 
        setResult("wrong")
    }
    return(
        <div className="options-container">
           { htmlQuiz?.questions[0].options.map( (option: string, i: number) => {
          //@ts-ignore
          return <li key={i} onClick={(e) => setSelectedAnswer(e.target.innerText)}>{option}</li>;
            })}
            <button onClick={() => submitAnswer()}>Submit Answer</button>
            <div>{result}</div>
        </div>
    )
}

export default Options