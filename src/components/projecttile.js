import * as React from 'react'
import Skill from './skill'
import {
  projectTile,
  projectImage,
  projectDesc,
  projectDescText,
  projectTitle,
  skillsSection,
  descText,
  projImg
} from '../styles/projects.module.css'
import{linkButton} from '../styles/layout.module.css'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

class ProjectTile extends React.Component {
  render() {
    const renderLinkButton = () => {
      if (this.props.project.buttonText != null) {
        return <a className={linkButton} href={this.props.project.buttonLink} target="_blank" rel="noopener noreferrer">{this.props.project.buttonText}</a>
      } 
      else return
    }

    const projectImg = getImage(this.props.project.img);
  
    return (
      <main className={projectTile}>
        <GatsbyImage image={projectImg} alt="Project Image" className={projectImage} imgClassName={projImg}/>
        <div className={projectDesc}>
          <div className={projectDescText}>
          <h3 className={projectTitle}>{this.props.project.name}</h3>
          <p className={descText}>{this.props.project.description}</p>
          <div className={skillsSection}>
            {(this.props.project.skills) && (this.props.project.skills.map(item => <Skill skill={item}/>))}
          </div>
          </div>
          {renderLinkButton()}
        </div>
      </main>
    );
  }
}

export default ProjectTile