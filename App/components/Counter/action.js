import * as actionTypes from '../../actionTypes'

export const increment = () => {
    const action = {
        type: 'INCREMENT'
    };
    return action;
}

export const decrement = () => {
    const action = {
        type: 'DECREMENT'
    };
    return action;
}

export const reset = () => {
    const action = {
        type: 'RESET'
    };
    return action;
}