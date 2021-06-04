import React from 'react'
import  PropTypes from 'prop-types'
const GussedWord = (props) => {
    let contents
    if(props.gussedWords.length===0){
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word !
            </span>
        )
    }
    return (
        <div data-test="component-gussed-word">
            {contents}
        </div>
    )
}
GussedWord.propTypes ={
    gussedWords:PropTypes.arrayOf(
        PropTypes.shape({
            gussedWord:PropTypes.string.isRequired,
            latterMatchCount:PropTypes.number.isRequired
        })
    ).isRequired
}
export default GussedWord
