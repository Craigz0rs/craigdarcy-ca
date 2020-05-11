/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../sass/styles.scss"

const Layout = ({ children, currentPage, index, fromIndex, fromPage}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pageNameCompatibility = () => (currentPage === "/") ? "home" : currentPage

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata.title} 
      />
        <main className={`main main--`}>
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
