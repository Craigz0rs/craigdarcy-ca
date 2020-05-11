import React from "react"
import { graphql } from 'gatsby'
import Layout from "./layout"

const Project = ({location, data}) => {
    const project = data.contentfulProject
    return (
      <Layout currentPage={location.pathname} index={false} fromIndex={false}>
        <>
            <h1>{project.title}</h1>
        </>
      </Layout>
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