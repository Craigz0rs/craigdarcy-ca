import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="grid content-wrap">

    </div>
    <div className="header__overlay">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1278.95 219.49"><path class="cls-1" d="M458-672.1C63.67-467.67-820.48-453.93-820.48-453.93l1278.4-.17Z" transform="translate(820.49 672.92)"/></svg>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
