import { Dropdown } from "../Dropdown"
import {shallow} from 'enzyme'
import React from 'react'

describe('Dropdown', () => {
    test('Should render', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
        expect(wrapper).toBeDefined()
        expect(wrapper.find('button')).toBeDefined()
    })
})