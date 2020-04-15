import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { createLogger } from 'redux-logger'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import rootReducer from './reducers'

import queues, { queue } from './queues/queues'

const root = combineReducers({
    queues
})

const logger = createLogger()

const state = {
    queues: [
        queue(1, 'something-added', '/', 42),
        queue(2, 'something-changed', '/', 12),
        queue(3, 'something-removed', '/', 10)
    ]
}

const configureStore = () => {
    const middlewares = [logger, thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(root, state, composedEnhancers)

    return store
}

const store = configureStore()

export default store
