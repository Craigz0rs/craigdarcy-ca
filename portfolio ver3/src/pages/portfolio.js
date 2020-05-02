import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectTile from "../components/project-tile"

const Portfolio = ({ location, data }) => {
    const fromIndex = () => {
        if (location.state && location.state.fromIndex) {
            return location.state.fromIndex
        }
        return false
    }
    const projects = data.allContentfulProject.edges

    return (
      <Layout 
        currentPage={location.pathname} 
        index={false} 
        fromIndex={fromIndex()}
      >
        <div className="portfolio grid">
          <section className="portfolio__content">
            <ul className="portfolio__list grid">
              {projects.map((project) =>
                <li 
                  key={project.node.contentful_id}
                  className="portfolio__listing"
                >
                  <ProjectTile project={project.node} /> 
                </li>
              )}
            </ul>
          </section>
        </div>
      </Layout>
    )
  }

export default Portfolio

export const query = graphql`
  query PortfolioQuery {
    allContentfulProject {
      edges {
        node {
          summaryImage {
            localFile {
              childImageSharp {
                fixed(width: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          title
          toolkit
          gitHub
          colorPrimary
          colorSecondary
          contentful_id
          liveSites {
            sites {
              type
              url
            }
          }
        }
      }
    }
  }
`