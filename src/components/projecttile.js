import * as React from 'react'
import SkillLogo from './skillLogo'
import {
  projectTile,
  projectImage,
  projectDesc,
  projectTitle,
  skillsSection,
  projImg
} from '../styles/projects.module.css'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
        {/* TODO: Fix rounded borders */}
        <GatsbyImage image={projectImg} alt="Project Image" className={projectImage} imgClassName={projImg}/>
        <div className={projectDesc}>
          <h2 className={projectTitle}>{this.props.project.name}</h2>
          <p>{this.props.project.description}</p>
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