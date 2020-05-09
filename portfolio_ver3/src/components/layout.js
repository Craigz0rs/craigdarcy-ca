import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { globalHistory } from "@reach/router"
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

  const pageNameCompatibility = () => {
    if (globalHistory && globalHistory.location.pathname) {
      return globalHistory.location.pathname === "/" ? "home" : globalHistory.location.pathname.substring(1)
    } else {
      return "404"
    }
  }
  const isIndex = () => (globalHistory.location.pathname === "/") ? true : false

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
