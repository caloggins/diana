export const QUEUES_LOADED = 'QUEUES_LOADED'

export const queue = (id, name, vhost, messages) => {
    return { id, name, vhost, messages }
}

const queues = (state = [], action) => {
    const handlers = {
        QUEUES_LOADED: () => action.body,
        DEFAULT: () => state
    }

    return (handlers[action.type] || handlers.DEFAULT)()
}

export default queues
