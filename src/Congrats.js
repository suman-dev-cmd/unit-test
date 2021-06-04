import React from 'react'

const Congrats = ({success}) => {
    return (
        <>
        {
            success?
            <div data-test="compomnent-congrats">
                <span data-test="congrats-message">
                    Congrats!! You guessed the word!
                </span>
            </div>
            :
            <div data-test="compomnent-congrats"></div>
        }
        </>
      
        
    );
}

export default Congrats
