import React from "react"
import projects from "data/projects"
import ProjectPreview from "../projectpreview/index.js"
import "./style.css"

const title = {
  code: "Code",
  design: "Design",
  socialmedia: "Social Media",
  illustration: "Illustration"
}

export default class Category extends React.Component {

  render() {
    const categoryName = this.props.match.params.name
    console.log(categoryName)

    const filteredProjects = projects.filter((item) => {
      return item.category === categoryName
    })

    return (

      <div className="Category">

        <h1 className="title">
          {title[categoryName]}
        </h1>

        <div className="flex-wrapper">
          <div className="projects">
            {filteredProjects.map(project => (
              <ProjectPreview
                key={project.id}
                url={project.id}
                name={project.name}
                description={project.shortdescription}
                image={project.image}
                image2={project.image2} />
            ))}
          </div>
        </div>

      </div>
    )
  }

}
