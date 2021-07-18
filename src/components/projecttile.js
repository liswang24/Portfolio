import * as React from 'react'
import {
  projectTile,
  projectImage,
  projectDesc,
  projectTitle,
  skill
} from '../styles/projects.module.css'
import { StaticImage } from "gatsby-plugin-image" //TODO: Remove after skills implemented 

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// TODO: Map skill to image and display

class ProjectTile extends React.Component {
  render() {
    const renderLinkButton = () => {
      if (this.props.project.buttonText != null) {
        return <button>{this.props.project.buttonText}</button>;
      } 
      else return
    }

    const projectImg = getImage(this.props.project.img);
  
  return (
    <main className={projectTile}>
      <GatsbyImage image={projectImg} alt="" className={projectImage}/>
      <div className={projectDesc}>
        <h2 className={projectTitle}>{this.props.project.name}</h2>
        <p>{this.props.project.description}</p>
        {renderLinkButton()}
        <div>
          <StaticImage src="../images/icon.png" alt={this.props.projectName} className={skill}/>
          <StaticImage src="../images/icon.png" alt={this.props.projectName} className={skill}/>
          <StaticImage src="../images/icon.png" alt={this.props.projectName} className={skill}/>
        </div>
      </div>
    </main>
  );
  }
}

export default ProjectTile