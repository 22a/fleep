import React, { Component } from 'react'

class Tile extends Component {
  setColor = () => {
    this.setState({
      color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`
    })
  }
  constructor (props) {
    super(props)
    this.state = {color: ''}
  }

  render () {
    const tileStyle = {
      backgroundColor: this.state.color
    }
    return (
      <div style={tileStyle}
        onClick={this.setColor}
        onContextMenu={this.setColor}
        onTouchMove={this.setColor}
        onMouseMove={this.setColor}
      ></div>
    )
  }
}

export default Tile
