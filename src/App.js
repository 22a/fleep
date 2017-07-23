import React, { Component } from 'react'
import Tile from './Tile.js'

class App extends Component {
  render () {
    const rows = this.props.rows
    const columns = this.props.columns
    const gridStyle = {
      height: '100vh',
      width: '100vw',
      display: 'grid',
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      alignContent: 'stretch',
      justifyItems: 'stretch'
    }
    const tiles = Array.from(Array(rows)).map(() => {
      return Array.from(Array(columns)).map(() => {
        return <Tile />
      })
    })
    return (
      <div style={gridStyle}>
        {tiles}
      </div>
    )
  }
}

export default App
