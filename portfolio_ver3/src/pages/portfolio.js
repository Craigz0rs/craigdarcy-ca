import React from "react"
import { graphql } from "gatsby"
import ProjectTile from "../components/project-tile"
import SEO from "../components/seo"

const Portfolio = ({ data }) => {
    const projects = data.allContentfulProject.edges

    return (
      <>
        <SEO title="A sample of my web development work to date" />
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
      </>
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
                fixed(width: 1000, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          logo {
            svg {
              content
            }
          }
          title
          subheading
          summary {
            summary
          }
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