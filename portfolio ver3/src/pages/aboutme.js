import React from "react"
import Layout from "../components/layout"

const AboutMe = ({location}) => {
    const fromIndex = () => {
        if (location.state && location.state.fromIndex) {
            return location.state.fromIndex
        }
        return false
    }

    return (
      <Layout currentPage={location.pathname} index={false} fromIndex={fromIndex()}>
        <>
  
        </>
      </Layout>
    )
  }

export default AboutMe