import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (

      <Link to={`/projects/${this.props.url}`} className="ProjectPreview">
        <div className="inner">
          <h1>{this.props.name}</h1>
          <p>{this.props.description} </p>
          <div className="image">
            <img src={this.props.image} alt="" />
          </div>

        </div>
      </Link>

    )
  }

}
