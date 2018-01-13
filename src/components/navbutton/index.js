import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navbutton extends React.Component {

  render() {
    return (
      <div className="Navbutton">

        <Link to="/navigation" className="button-right">
          <div className="image">
            <img src="/images/smiley_64x64.svg" alt="smiley" className="smiley" />
          </div>
        </Link>

        <div className="about">
          <Link to="/about">About</Link>
        </div>

      </div>
    )
  }

}
