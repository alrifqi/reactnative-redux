import * as actionTypes from '../../actionTypes'
let temp = 'hello'

export const increment = (val) => {
    return {
        type: 'INCREMENT',
        number: val
    }
}

export const decrement = (val) => {
    return {
        type: 'DECREMENT',
        number: val
    }
}

export const reset = () => {
    return {
        type: 'RESET',
        text: temp
    }
}