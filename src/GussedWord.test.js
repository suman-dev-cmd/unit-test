import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme';
import CheckPropsType from 'check-prop-types';
import {findByTestArr,CheckProps} from '../test/testUtils';
import GussedWord from './GussedWord';
const defaultProps ={
    gussedWords:[
        {gussedWord:'train',latterMatchCount:3}
    ]
};
const setup=(props={}) => {
    const setupProps = {...defaultProps,...props};
    return shallow(<GussedWord {...setupProps} />);
};
test('does not throw warning with expected props',()=>{
    CheckProps(GussedWord,defaultProps)
});
describe('if there are no words gussed',()=>{
    let wrapper
    beforeEach(()=>{
        const wrapper = setup({gussedWords:[]});
    })
    test('renders without error', () => {
        const component = findByTestArr(wrapper,'component-gussed-word');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const instructions = findByTestArr(wrapper,'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});
describe('if there are words gussed',()=>{
   
});
