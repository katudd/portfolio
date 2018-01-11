import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navbutton from "./navbutton"
import Navigation from "./navigation"
import About from "./about"
import Startimage from "./startimage"
import Category from "./category"

// import ProjectPreview from "./projectpreview"
import ProjectPage from "./project-page"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>

        {/* <ProjectPreview /> */}
        {/* <Start /> */}

        <div className="App">
          <Navbutton />
          {/* <Category /> */}

          <div className="content">
            {/* <Startimage /> */}
            {/* <ProjectPage /> */}

            {/* <Route path="/" exact component={Start} /> */}
            <Route path="/" exact component={Startimage} />
            <Route path="/navigation" component={Navigation} />
            <Route path="/category/:name" component={Category} />
            <Route path="/about" component={About} />
            {/* <Route path="/projectpreview" component={ProjectPreview} /> */}
            <Route path="/projects/:id" component={ProjectPage} />

          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
