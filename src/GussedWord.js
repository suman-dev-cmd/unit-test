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
    }else{
        const guessedWordsRows = props.gussedWords.map((word,index)=>(
            <tr data-test="guessed-word" key={index} >
                <td>{word.gussedWord}</td>
                <td>{word.latterMatchCount}</td>
            </tr>
        ))
        contents=(
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Latter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                </table>
            </div>
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
