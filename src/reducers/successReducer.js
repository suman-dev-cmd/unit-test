import {actionTypes} from '../actions'
export default (state,action) =>{
    switch (action.type) {
        case actionTypes.CORRECT_GUESS:
            return true;
            break;
        default:
            state;
    }
}