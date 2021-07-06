import * as React from 'react'
import Layout from '../components/layout'
import ProjectTile from '../components/projecttile'
import {
  projects
} from '../styles/projecttile.module.css'

const ProjectsPage = () => {
  return (
    <Layout>
      <div className={projects}>
        {/* To be updated to use GraphQl*/}
        <ProjectTile 
          projectName="Project1"
          projectImg="" 
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dui eget quam ultrices tincidunt non sit amet sem. Cras bibendum enim sit amet ligula maximus feugiat. In vitae felis mi."
          buttonLinkName="View on GitHub"
          buttonLink=""
        />
        <ProjectTile 
          projectName="Project2"
          projectImg="" 
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dui eget quam ultrices tincidunt non sit amet sem. Cras bibendum enim sit amet ligula maximus feugiat. In vitae felis mi."
        />
        <ProjectTile 
          projectName="Project3"
          projectImg="" 
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dui eget quam ultrices tincidunt non sit amet sem. Cras bibendum enim sit amet ligula maximus feugiat. In vitae felis mi."
          buttonLinkName="Learn More"
          buttonLink="/about"
        />
        <ProjectTile 
          projectName="Project4"
          projectImg="" 
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dui eget quam ultrices tincidunt non sit amet sem. Cras bibendum enim sit amet ligula maximus feugiat. In vitae felis mi."
        />
        <ProjectTile 
          projectName="Project5"
          projectImg="" 
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dui eget quam ultrices tincidunt non sit amet sem. Cras bibendum enim sit amet ligula maximus feugiat. In vitae felis mi."
          buttonLinkName="Learn More"
          buttonLink=""
        />
      </div>
      
    </Layout>
  )
}

export default ProjectsPage