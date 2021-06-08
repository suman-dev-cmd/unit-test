import CheckPropsType from 'check-prop-types';
import {createStore} from 'redux';
import rootReducer from '../src/reducers';
export const storeFactory = (initialState)=>{
    return createStore(rootReducer,initialState);
}
export const findByTestArr =(wrapper,val)=>{
    return wrapper.find(`[data-test='${val}']`);
};

export const CheckProps =(component,conformingProps)=>{
    const propError = CheckPropsType(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined();
}
