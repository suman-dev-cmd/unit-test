import React from 'react';
import PropTypes from 'prop-types';
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
Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}
export default Congrats
