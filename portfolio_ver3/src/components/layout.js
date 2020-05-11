import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { globalHistory } from "@reach/router"
import "./layout.css"
import "../sass/styles.scss"

const Layout = ({ children }) => {
  const pageNameCompatibility = () => {
    if (globalHistory && globalHistory.location.pathname) {
      return globalHistory.location.pathname === "/" ? "home" : globalHistory.location.pathname.substring(1)
    } else {
      return "404"
    }
  }

  return (
    <>
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

export default Layout
