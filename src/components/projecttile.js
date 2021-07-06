import * as React from 'react'
import {
  projectTile,
  projectImage,
  skillsSection,
  skill
} from '../styles/projecttile.module.css'
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from 'gatsby'

class ProjectTile extends React.Component {
  render() {
    const renderLinkButton = () => {
      if (this.props.buttonLinkName != null) {
        return <button>{this.props.buttonLinkName}</button>;
      } 
      // else if (this.props.buttonLinkName === "Learn More") {
      //   return <Link to={this.props.buttonLink}>{this.props.buttonLinkName}</Link>
      // }
      else {
        return
      }
    }

    return (
      <main className={projectTile}>
        <StaticImage src="../images/icon.png" alt={this.props.projectName} className={projectImage}/>
        <h2>{this.props.projectName}</h2>
        <p>{this.props.projectDescription}</p>
        {renderLinkButton()}
        <div className={skillsSection}>
          <StaticImage src="../images/icon.png" alt={this.props.projectName} className={skill}/>
          <StaticImage src="../images/icon.png" alt={this.props.projectName} className={skill}/>
          <StaticImage src="../images/icon.png" alt={this.props.projectName} className={skill}/>
        </div>
      </main>
    );
  }
}

export default ProjectTile