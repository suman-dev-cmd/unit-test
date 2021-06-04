import { render, screen } from '@testing-library/react';
import Congrats from './Congrats';
import {shallow} from 'enzyme';
import CheckPropsType from 'check-prop-types';
import {findByTestArr,CheckProps} from '../test/testUtils';
const setup=(props={}) => {
    return shallow(<Congrats {...props} />);
}
test('renders without error', () => {
  const wrapper = setup({success:false});
  const component = findByTestArr(wrapper,'compomnent-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  
    const wrapper = setup({success:false});
    const component = findByTestArr(wrapper,'compomnent-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({success:true});
    const message = findByTestArr(wrapper,'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw waring with expected props',()=>{
    const expectedProps = {success:false};
    CheckProps(Congrats,expectedProps);
});