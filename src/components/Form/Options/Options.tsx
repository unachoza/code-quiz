import "./Options.css"
import data from "../../../data/data.json"

const Options = (): JSX.Element  => {

    let htmlQuiz = (data.quizzes.filter((q:any) => q.title == "HTML")).shift()
    console.log(htmlQuiz!.questions[0].options)

    return(
        <div className="options-container">
           { htmlQuiz ?
           htmlQuiz!.questions[0].options.map( (option: string) => {
           return <li >{option}</li>;
        }): "nothing"}
        </div>
    )
}

export default Options