import React from "react"
// import { Link } from "react-router-dom"
import "./style.css"

export default class About extends React.Component {

  render() {
    return (
      <div className="About">
        <div className="about-content">
          Hej! My name is Katrin, I am a digital- and print designer with web development knowledge,
          living and working in Stockholm.
          You are always welcome to contact me at:
        </div>
        <a className="mail" href="mailto:katrin@uddstromer.se">katrin@uddstromer.se</a>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/katrinuddstromer/" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin" />
          <a href="https://github.com/katudd" target="_blank" rel="noopener noreferrer" className="fa fa-github" />
        </div>
      </div>

    )
  }

}
