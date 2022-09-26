import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const fruits = this.props.fruits.map((fruit, i) => {
            return <li key={`fruit-${i}`}>{fruit}</li>
        })
        const removed = this.props.removed.map((fruit, idx)=>{
            return <li key={`removed-${idx}`}>{fruit}</li>
          })
        return (
            <div>
                <h3>Matching Fruits!</h3>
                <ul>
                    {fruits}
                </ul>

                <h3>Removed Fruits!</h3>
                <ul>
                    {removed}
                </ul>
            </div>
        )
    }
}