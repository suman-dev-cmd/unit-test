import { render, screen } from '@testing-library/react';
import Congrats from './Congrats';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestArr} from '../test/testUtils';
Enzyme.configure({adapter: new EnzymeAdapter()});
const setup=(props={}) => {
    return shallow(<Congrats {...props} />);
}
test('renders without error', () => {
  const wrapper = setup();
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