import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navbutton extends React.Component {

  render() {
    return (
      <div className="Navbutton">
        <button className="button-right"><Link to="/navigation" className="navbutton-span">&#x263b;</Link></button>
        <div className="about">
          <Link to="/about">About</Link>
        </div>

      </div>
    )
  }

}
