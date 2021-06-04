import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new EnzymeAdapter()})

  const setup=() => shallow(<App />);
  const findByTestArr =(wrapper,val)=>wrapper.find(`[data-test='${val}']`)
test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestArr(wrapper,'component-app');
  expect(appComponent.length).toBe(1)
});
test('renders increment button',()=>{
  const wrapper = setup();
  const button = findByTestArr(wrapper,'component-button');
  expect(button.length).toBe(1)
});
test('renders counter display',()=>{
  const wrapper = setup();
  const display = findByTestArr(wrapper,'component-display');
  expect(display.length).toBe(1)

});
test('counter display starts at 0',()=>{
  const wrapper = setup();
  const count = findByTestArr(wrapper,'component-count').text();
  expect(count).toBe("0")
});
test('clicking button increments counter display',()=>{
  const wrapper = setup();
  const incrementButton = findByTestArr(wrapper,'component-button');
  incrementButton.simulate('click')
  const count = findByTestArr(wrapper,'component-count').text();
  expect(count).toBe("1")

});