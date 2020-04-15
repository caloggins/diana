import React from 'react'
import * as dependency from 'react-redux'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import Page from './Page'

describe('Your description here...', () => {
    const configure = configureStore()
    let store

    beforeEach(() => {
        store = configure()
        store.dispatch = jest.fn()
    })

    it('it should render', () => {
        dependency.useDispatch = jest.fn()
        dependency.useSelector = _state => {}
        const tree = shallow(<Page />)

        expect(toJson(tree)).toMatchSnapshot()
    })
})
