import { createSelector } from 'reselect'

const filtered = createSelector(
    [state => state.queues, state => state.filter],
    (queues, filter) => {
        if (filter === '') return queues
        return queues.filter(q => q.name.includes(filter))
    }
)

export default filtered
