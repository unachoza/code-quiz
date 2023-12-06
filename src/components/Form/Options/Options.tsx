import "./Options.css"
import data from "../../../data/data.json"
//@ts-ignore
const Options = ({quiz}:string): JSX.Element  => {
    console.log(quiz)

    let htmlQuiz = (data.quizzes.filter((q:any) => q.title == quiz)).shift()
    return(
        <div className="options-container">
           { htmlQuiz?.questions[0].options.map( (option: string) => {
                return <li>{option}</li>;
            })}
        </div>
    )
}

export default Options