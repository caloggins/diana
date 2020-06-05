import React from 'react'
import * as dependency from 'react-redux'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import Page from './Page'
import { queue } from './queues'

const queues = [
    queue(1, 'something-added', '/', 42),
    queue(2, 'something-removed', '/', 24),
    queue(3, 'something-changed', '/private', 12)
]

let state = {
    queues,
    filter: ''
}

describe('<Page />...', () => {
    const configure = configureStore()
    let store

    beforeEach(() => {
        store = configure()
        store.dispatch = jest.fn()
    })

    test('it should render', () => {
        dependency.useDispatch = jest.fn()
        dependency.useSelector = callback => {
            return callback(state)
        }
        const tree = shallow(<Page />)

        expect(toJson(tree)).toMatchSnapshot()
    })

    test('it can filter the list', () => {
        state.filter = 'added'
        dependency.useDispatch = jest.fn()
        dependency.useSelector = callback => {
            return callback(state)
        }
        const tree = shallow(<Page />)
        const search = tree.find('#name-filter')
        search.value = 'removed'
        search.simulate('change')

        expect(store.dispatch).toHaveBeenCalled()
    })
})
