import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button"

describe('the submit button', async () => {
    it('should recieve user choice when clicked', () => {
        // render component

        // access button
        const button = screen.getByTestId('button') 
        // simulate button click
        userEvent.click(button); 

        // expect result
     
       });
    it('should evalute if user choice is correct', () =>{

    });
    it('should display correct answer and incorrect answer', () => {

    })
})
