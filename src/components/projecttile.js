import * as React from 'react'
import SkillLogo from './skillLogo'
import {
  projectTile,
  projectImage,
  projectDesc,
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
          <h3 className={projectTitle}>{this.props.project.name}</h3>
          <p className={descText}>{this.props.project.description}</p>
          <div className={skillsSection}>
            {(this.props.project.skills) && (this.props.project.skills.map(item => <SkillLogo skill={item}/>))}
          </div>
          {renderLinkButton()}
        </div>
      </main>
    );
  }
}

export default ProjectTile