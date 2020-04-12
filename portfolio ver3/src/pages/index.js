import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({location}) => {

  console.log(location.state.isIndex)
  return (
    <Layout currentPage={location.pathname}>
      <>
      </>
    </Layout>
  )
}



export default IndexPage
