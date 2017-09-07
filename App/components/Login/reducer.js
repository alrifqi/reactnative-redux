import * as actionTypes from '../../actionTypes';

text = "hallo"
INITIALSTATE = {number: 0, text: "kosong"}
// const counter = (state = [], action) => {
export default function counter(state = INITIALSTATE, action) {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                number: action.number + 1,
                text: "increase"
            }
        case actionTypes.DECREMENT:
        return {
            ...state,
            number: action.number - 1,
            text: "decrease"
        }
        case actionTypes.RESET:
        return {
            ...state,
            number: 0,
            text: "reset"
        }
        default:
            return state;
    }
}