import { render, screen } from '@testing-library/react';
import App from './App';
import {mount} from 'enzyme';
import {findByTestArr} from '../test/testUtils';
jest.mock('./actions');
import {getSecretWord as mockGetSecretWord} from './actions';

const setup =()=>{
  return mount(<App />);
}
test('reders without error', () => {
  const wrapper= setup();
  const appComponent = findByTestArr(wrapper,'component-app');
  expect(appComponent).toHaveLength(1);
});
describe('get serect word',()=>{
  beforeEach(()=>{
    mockGetSecretWord.mockClear();
  })
  test('getSecrectWord on app mount',()=>{
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test('getSecretWord does not run app update',()=>{
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});


