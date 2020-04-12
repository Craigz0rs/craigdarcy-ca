import React, {useState} from "react"
import { Link } from "gatsby"
import Github from "../images/github.svg"
import Info from "../images/info2.svg"
import Linkedin from "../images/linkedin3.svg"
import Projects from "../images/projects.svg"

const Nav = ({currentPage, isIndex}) => {
    return (
        <nav className="nav">
            <Link to="/"
                className="nav__item"
                aria-label="External link to my GitHub"
                state={{currentPage, isIndex}}
            >
                <Github />
            </Link>
            <Link to="/aboutme"
                className="nav__item"
                aria-label="Read more about me"
                state={{currentPage, isIndex}}
            >
                <Info />
            </Link>
            <Link to="/portfolio"
                className="nav__item"
                aria-label="Learn about my work"
                state={{currentPage, isIndex}}
            >
                <Projects />
            </Link>
            <a href="https://linkedin.com/ln/craigdarcy"
                className="nav__item"
                aria-label="External link to my LinkedIn profile"
            >
                <Linkedin />
            </a>
        </nav>
    )
}

export default Nav