import React, { Component } from 'react'
import FruitContainer from './FruitContainer'

const fruits = [
  'banana',
  'mango',
  'apple',
  'strawberry',
  'fig',
  'pineapple',
  'apricot',
  'prunes',
  'tomatoe',
  'pumpkin'
  
]

export default class App extends Component {
  render() {
    return (
      <div>
        <FruitContainer fruits={fruits} />
      </div>
    )
  }
}