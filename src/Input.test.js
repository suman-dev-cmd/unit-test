import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Input from './Input';
import {findByTestArr,CheckProps} from '../test/testUtils';
import React from 'react';
Enzyme.configure({adapter: new EnzymeAdapter()});

const setup=(success=false,secrectWord='party') => {
    return shallow(<Input success={success} secrectWord={secrectWord} />);
};

test('does not throw warning with expected props', () => {
    CheckProps(Input,{secrectWord:'party'});
});
describe('render',()=>{
    describe('success is true',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup(true);
        })
        test('Inputs render without error', () => {
            const wrapper = setup();
            const appComponent = findByTestArr(wrapper,'component-input');
            expect(appComponent.length).toBe(1)
        });
        test('input box does not show', () => {
            const inputBox = findByTestArr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(false);
        });
        test('submit button does not show', () => {
            const submitButton = findByTestArr(wrapper,'submit-button');
            expect(submitButton.exists()).toBe(false);
        });
    });
    describe('success is false',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup(false);
        })
        test('Inputs render without error', () => {
            const wrapper = setup();
            const appComponent = findByTestArr(wrapper,'component-input');
            expect(appComponent.length).toBe(1)
        });
        test('input box  show', () => {
            const inputBox = findByTestArr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(true);
        });
        test('submit button  show', () => {
            const submitButton = findByTestArr(wrapper,'submit-button');
            expect(submitButton.exists()).toBe(true);
        });
    });
});
describe('state controlled input filed',()=>{
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originaluseState;
    beforeEach(()=>{
        mockSetCurrentGuess.mockClear();
        originaluseState = React.useState;
        React.useState = jest.fn(()=>["",mockSetCurrentGuess]);
        wrapper = setup();
    });
    afterEach(()=>{
        React.useState=originaluseState;
    })
    test('state updates with the value of inputbox upon change',()=>{
        const inputBox = findByTestArr(wrapper,'input-box');
        const mockEvent = {target:{value:'train'}}
        inputBox.simulate("change",mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
    test('field is cleared upon submit button click', () => {
        const submitButton = findByTestArr(wrapper,'submit-button');
        submitButton.simulate('click',{preventDefault(){}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    })
    
});