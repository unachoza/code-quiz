import "./Button.css"
export interface PropsButton {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }
  
const Button = ({ text, onClick }: PropsButton): JSX.Element => {
    return (
      <button className="button" role="button" value={text} onClick={onClick}>
        {text}
      </button>
    );
  };

  export default Button;