import queues, { queue, QUEUES_LOADED } from './queues'

describe('queues...', () => {
    test('has a default set', () => {
        const defaultListOfQueues = []

        expect(queues(undefined, {})).toEqual(defaultListOfQueues)
    })

    test('returns queues being loaded', () => {
        const loaded = {
            type: QUEUES_LOADED,
            body: [queue(1, 'something-added', '/', 42), queue(2, 'something-removed', '/', 42)]
        }

        expect(queues(undefined, loaded)).toEqual(loaded.body)
    })
})
