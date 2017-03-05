import React, { Component } from 'react'

class Hoverable extends Component {
  state = { isHovered: false }

  onHoverStart = () => {
    this.setState({ isHovered: true })
  }

  onHoverEnd = () => {
    this.setState({ isHovered: false })
  }

  render() {
    const { target: Component, ...rest } = this.props
    const { isHovered } = this.state

    return (
      <Component
        onMouseEnter={this.onHoverStart}
        onMouseLeave={this.onHoverEnd}
        isHovered={isHovered}
        {...rest}
      />
    )
  }
}

export default Hoverable
