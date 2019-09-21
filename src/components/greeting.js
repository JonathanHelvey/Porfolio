import React, { Component } from "react"
import { Spring, config } from "react-spring/renderprops"

function generateGreeting() {
  let today = new Date()
  let curHr = today.getHours()
  if (curHr < 12) {
    return (
      <h3 className="full-stack-dev">
        <span role="img" aria-label="sunset">
          🌅
        </span>
        Good Morning!
        <span role="img" aria-label="sunset">
          🌅
        </span>
      </h3>
    )
  } else if (curHr < 18) {
    return (
      <h3 className="full-stack-dev">
        <span role="img" aria-label="sun">
          ☀️
        </span>
        Good Afternoon!
        <span role="img" aria-label="sun">
          ☀️
        </span>
      </h3>
    )
  } else {
    return (
      <h3 className="full-stack-dev">
        <span role="img" aria-label="moon">
          🌙
        </span>
        Good Evening!
        <span role="img" aria-label="moon">
          🌙
        </span>
      </h3>
    )
  }
}

class MainHeader extends Component {
  render() {
    //const greeting = generateGreeting()
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        delay="2000"
        config={config.molasses}
      >
        {props => <h3 style={props}>{generateGreeting()}</h3>}
      </Spring>
    )
  }
}
export default MainHeader
