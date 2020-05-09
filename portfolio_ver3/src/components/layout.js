import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../sass/styles.scss"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const pageNameCompatibility = () => (currentPage === "/") ? "home" : currentPage.substring(1)
  const pageNameCompatibility = () => {
    if (location && location.pathname) {
      return location.pathname === "/" ? "home" : location.pathname.substring(1)
    } else {
      return "404"
    }
  }
  const isIndex = () => (location.pathname === "/") ? true : false

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata.title} 
        currentPage={pageNameCompatibility()} 
        index={isIndex()} 
      />
      <main className={`main main--${pageNameCompatibility()}`}>
        <div className="content-wrap">          
          {children}
        </div>
      </main>
      <footer className="footer">
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
