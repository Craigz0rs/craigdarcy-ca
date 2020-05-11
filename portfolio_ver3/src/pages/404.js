import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background1 from "../images/background1.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>You've been 404'd</h1>
    <p>Best be on yer way back bud, this route doesn't exist.</p>
    <div className="aboutme__background-wrap">
      <div className="aboutme__background">
          <Background1 />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
