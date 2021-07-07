import * as React from 'react'
import {
  projectTile,
  projectImage,
  skill
} from '../styles/projects.module.css'
import { StaticImage } from "gatsby-plugin-image"

class ProjectTile extends React.Component {
  render() {
    const renderLinkButton = () => {
      if (this.props.buttonLinkName != null) {
        return <button>{this.props.buttonLinkName}</button>;
      } 
      else return
    }

    return (
      <main className={projectTile}>
        <StaticImage src="../images/icon.png" alt={this.props.projectName} className={projectImage}/>
        <h2>{this.props.projectName}</h2>
        <p>{this.props.projectDescription}</p>
        {renderLinkButton()}
        <div>
          <StaticImage src="../images/icon.png" alt={this.props.projectName} className={skill}/>
          <StaticImage src="../images/icon.png" alt={this.props.projectName} className={skill}/>
          <StaticImage src="../images/icon.png" alt={this.props.projectName} className={skill}/>
        </div>
      </main>
    );
  }
}

export default ProjectTile