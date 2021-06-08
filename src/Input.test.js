import Enzyme,{mount} from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Input from './Input';
import {findByTestArr,CheckProps,storeFactory} from '../test/testUtils';
import React from 'react';
import {Provider} from 'react-redux';
Enzyme.configure({adapter: new EnzymeAdapter()});

const setup=(initialState={},secrectWord='party') => {
    const store = storeFactory(initialState);
    return mount(<Provider store={store}><Input  secrectWord={secrectWord} /></Provider>);
};

test('does not throw warning with expected props', () => {
    CheckProps(Input,{secrectWord:'party'});
});
describe('render',()=>{
    describe('success is false',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup({success:false});
        })
        test('Inputs render without error', () => {
            const appComponent = findByTestArr(wrapper,'component-input');
            expect(appComponent.length).toBe(1)
        });
        test('input box does not show', () => {
            const inputBox = findByTestArr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(true);
        });
        test('submit button does not show', () => {
            const submitButton = findByTestArr(wrapper,'submit-button');
            expect(submitButton.exists()).toBe(true);
        });
    });
    describe('success is true',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup({success:true});
        })
        test('Inputs render without error', () => {
            const appComponent = findByTestArr(wrapper,'component-input');
            expect(appComponent.length).toBe(1)
        });
        test('input box  show', () => {
            const inputBox = findByTestArr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(false);
        });
        test('submit button  show', () => {
            const submitButton = findByTestArr(wrapper,'submit-button');
            expect(submitButton.exists()).toBe(false);
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
        wrapper = setup({success:false});
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