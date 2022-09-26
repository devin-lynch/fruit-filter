import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class FruitContainer extends Component {
    // shared state stored here
    state = {
        fruitsToDisplay: this.props.fruits
    }

    // methods to manipulate state defined here
    render() {
        return (
            <>
                <h1>I am the fruit containter</h1>

                {/* give input the methods to manipulate state */}
                <Input />

                {/* give list the state to display */}
                <List fruits={this.state.fruitsToDisplay} />
            </>
        )
    }
}