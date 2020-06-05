import { queue } from './queues'
import filtered from './filtered'

describe('filtered queues...', () => {
    const queues = [queue(1, 'first', '/', 40), queue(2, 'second', '/', 41)]

    test('no filter returns all', () => {
        const state = {
            queues,
            filter: ''
        }
        expect(filtered(state)).toEqual(state.queues)
    })

    test('returns items that match filter', () => {
        const state = {
            queues,
            filter: 'first'
        }
        expect(filtered(state)).toEqual([queue(1, 'first', '/', 40)])
    })
})
