import React from "react"
import { graphql } from 'gatsby'

const Project = ({ data }) => {
    const project = data.contentfulProject

    return (
      <>
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