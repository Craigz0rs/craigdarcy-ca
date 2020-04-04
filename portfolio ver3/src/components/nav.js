import React from "react"

const Nav = () => {
    return (
        <nav className="nav">
            <a href="https://github.com/Craigz0rs"
                className="nav__item"
                aria-label="External link to my GitHub"
            ></a>
            <a href="#about"
                className="nav__item"
                aria-label="Read more about me"
            ></a>
            <a href="#projects"
                className="nav__item"
                aria-label="Learn about my work"
            ></a>
            <a href="https://linkedin.com/ln/craigdarcy"
                className="nav__item"
                aria-label="External link to my LinkedIn profile"
            ></a>
        </nav>
    )
}

export default Nav