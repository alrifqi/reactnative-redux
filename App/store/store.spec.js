import { counter } from './store.js'

describe('reducers', () => {
    describe('counter', () => {
        it('should provide the initial state', () => {
            expect(counter(undefined, {})).toBe(0)
        })

        it('should handle INCREMENT state', () => {
            expect(counter(1, {type: 'INCREMENT'})).toBe(2)
        })

        it('should handle DECREMENT state', () => {
            expect(counter(1, {type: 'DECREMENT'})).toBe(0)
        })

        it('should handle RESET state', () => {
            expect(counter(199, {type: 'RESET'})).toBe(0)
        })

        it('should ignore unknown actions', () => {
            expect(counter(9, {type: 'unknown'})).toBe(9)
        })
    })
})