import React from "react"
import { graphql } from "gatsby"
import ProjectTile from "../components/project-tile"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Portfolio = ({ data }) => {
    const projects = data.allContentfulProject.edges

    return (
      <Layout>
        <SEO 
          title="Portfolio Projects"
          description="Select JAMstack and WordPress projects I have created over the years. Take a look at what I can do!"
        />
        <div className="portfolio grid">
          <section className="portfolio__content">
            <h1 className="screenreader-text">Portfolio</h1>
            <ul className="portfolio__list grid" aria-label="Projects">
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