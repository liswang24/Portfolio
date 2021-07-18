import * as React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import ProjectTile from '../components/projecttile'
import {
  projects
} from '../styles/projects.module.css'

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <div className={projects}>
        {data.allProjectsJson.edges.map(edges => <ProjectTile project={edges.node} />)}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          buttonLink
          buttonText
          description
          skills
          name
          img {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage