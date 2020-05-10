import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"

const Project = ({ data }) => {
    const project = data.contentfulProject

    return (
      <>
        <SEO title={project.title} />
          <h1>{project.title}</h1>
      </>
    )
  }

export default Project

export const query = graphql`
  query($id: String!) {
    contentfulProject(id: {eq: $id}) {
        title
        toolkit
    }
  }
`