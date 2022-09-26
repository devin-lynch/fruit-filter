import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class FruitContainer extends Component {
    // shared state stored here
    state = {
        // an array of fruits to display
        fruitsToDisplay: this.props.fruits,
        // value that has been typed into the input
        filterValue: '',
        fruitsFiltered: []
    }

    handleFilterChange = (e) => {
        // get the value from the event
        const filterValue = e.target.value
        // filter through the list held in state based on the input value
        const filteredFruitList = this.props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        const removedFruitsList = this.props.fruits.filter(fruit => {
            return !fruit.toLowerCase().includes(filterValue.toLowerCase())
        })

        // set state to control the input
        this.setState({
            fruitsToDisplay: filteredFruitList,
            filterValue,
            fruitsFiltered: removedFruitsList
        })
    }

    // methods to manipulate state defined here
    render() {
        return (
            <>
                <h1>I am the fruit containter</h1>

                {/* give input the methods to manipulate state */}
                <Input
                    value={this.state.filterValue}
                    handleFilterChange={this.handleFilterChange}
                />

                {/* give list the state to display */}
                <List 
                fruits={this.state.fruitsToDisplay}
                removed={this.state.fruitsFiltered}
                />
            </>
        )
    }
}