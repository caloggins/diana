import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

describe('<App />', () => {
    xtest('renders learn react link', () => {
        const { getByText } = render(<App />)
        const linkElement = getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })

    test('snapshot', () => {
        const tree = shallow(<App />)
        expect(toJson(tree)).toMatchSnapshot()
    })
})
