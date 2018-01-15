import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Navbutton from "./navbutton"
import Navigation from "./navigation"
import About from "./about"
import Startimage from "./startimage"
import Category from "./category"
import ProjectPage from "./project-page"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbutton />
          <div className="content">
            <Route path="/" exact component={Startimage} />
            <Route path="/navigation" component={Navigation} />
            <Route path="/category/:name" component={Category} />
            <Route path="/about" component={About} />
            <Route path="/projects/:id" component={ProjectPage} />
          </div>
        </div>
      </HashRouter>
    )
  }

}

export default App
