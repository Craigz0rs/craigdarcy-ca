import React from "react"
import Github from "../images/github.svg"
import Info from "../images/info2.svg"
import Linkedin from "../images/linkedin3.svg"
import Projects from "../images/projects.svg"

const Nav = () => {
    return (
        <nav className="nav">
            <a href="https://github.com/Craigz0rs"
                className="nav__item"
                aria-label="External link to my GitHub"
            >
                <Github />
            </a>
            <a href="#about"
                className="nav__item"
                aria-label="Read more about me"
            >
                <Info />
            </a>
            <a href="#projects"
                className="nav__item"
                aria-label="Learn about my work"
            >
                <Projects />
            </a>
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