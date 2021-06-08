import React from 'react';
import {mount} from 'enzyme';
import App from './App';
import {findByTestArr} from '../test/testUtils';

const setup=(state={})=>{
    const wrapper = mount(<App />);
    const inputBox = findByTestArr(wrapper,'input-box');
    inputBox.simulate('change',{target:{value:'train'}});
    const submitButton = findByTestArr(wrapper,'submit-button');
    submitButton.simulate('click',{preventDefault(){}});
    return wrapper;
};
describe.skip('no words guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({
            secretWord:'party',
            success:false,
            gussedWords:[]
        });
    });
    test('creates GuessedWords table with one row', () => {
        const guessedWordRows = findByTestArr(wrapper,'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    });
     
});

describe.skip('some words guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({
            secretWord:'party',
            success:false,
            gussedWords:[{guessWord:'agile',letterMatchCount:1}]
        });
    });
    test('creates GuessedWords table with one row', () => {
        const guessedWordRows = findByTestArr(wrapper,'guessed-word');
        expect(guessedWordRows).toHaveLength(2);
    });
});

describe.skip('guess secret word',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({
            secretWord:'party',
            success:false,
            gussedWords:[{guessWord:'agile',letterMatchCount:1}]
        });
        const inputBox = findByTestArr(wrapper,'input-box');
        const mockEvent = {target:{value:'party'}};
        inputBox.simulate('change',mockEvent);
        const submitButton = findByTestArr(wrapper,'submit-button');
        submitButton.simulate('click',{preventDefault(){}});
    });
    
    test('adds row to guessedWords table', () => {
        const guessedWordNodes = findByTestArr(wrapper,'guessed-word');
        expect(guessedWordNodes).toHaveLength(3);
    });
    test('displays congrats component', () => {
        const congrats = findByTestArr(wrapper,'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);
    });
    test('does not display input component congrats',()=>{
        const inputBox = findByTestArr(wrapper,'input-box');
        const mockEvent = {target:{value:'party'}};
        inputBox.simulate('change',mockEvent);
        const submitButton = findByTestArr(wrapper,'submit-button');
        expect(submitButton.exists().toBe(false))
    });
});

