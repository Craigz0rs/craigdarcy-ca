import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({location}) => {
  const fromIndex = () => {
      if (location.state && location.state.fromIndex) {
          return location.state.fromIndex
      }
      return false
  }

  const fromPage = () => {
    if (location.state && location.state.fromPage) {
        return location.state.fromPage
    }
    return false
  }

  return (
    <Layout currentPage={location.pathname} index={true} fromIndex={fromIndex()} fromPage={fromPage()}>
      <>
      </>
    </Layout>
  )
}
export default IndexPage
