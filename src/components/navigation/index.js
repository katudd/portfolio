import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="Navigation">

        <ul>
          <li><Link to="/category/code" className="menu-links">Code</Link></li>
          <li><Link to="/category/design" className="menu-links">Design</Link></li>
          {/* <li><Link to="/category/socialmedia" className="menu-links">Social Media</Link></li> */}
          {/* <li><Link to="/category/illustration" className="menu-links">The rest</Link></li> */}
        </ul>

      </nav>

    )
  }

}
