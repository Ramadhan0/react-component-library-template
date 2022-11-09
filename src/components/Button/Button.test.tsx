import React from 'react'
import Button from './Button'
import { render } from '@testing-library/react'

describe("Button", () => {
    test("render the button", () => {
        render(<Button label='Hello world' />)
    })
})
