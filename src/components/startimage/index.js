import React from "react"
// import { Link } from "react-router-dom"
import "./style.css"

export default class Startimage extends React.Component {

  render() {
    return (
      <div className="startimage-wrapper">
        <div className="Startimage">
          <div>
            <img src="/images/bigname.svg" alt="Katrin Uddströmer" className="big-name" />
            <img src="/images/rotatename.svg" alt="Katrin Uddströmer" className="rotate-name" />
          </div>
        </div>
      </div>

    )
  }

}
