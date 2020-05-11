import React from 'react'
import Gatsby from "../images/icon__gatsby.svg"
import ReactIcon from "../images/icon__react.svg"
import Gridsome from "../images/icon__gridsome.svg"
import Wordpress from "../images/icon__wordpress.svg"
import Contentful from "../images/icon__contentful.svg"
import Sass from "../images/icon__sass.svg"
import Vue from "../images/icon__vue.svg"

const ProjectToolkit = ({ toolkit }) => {
    const getTool = (toolName) => {
        switch (toolName.toLowerCase()) {
            case "gatsby":
                return <Gatsby />;
            case  "react":
                return <ReactIcon />;
            case "gridsome":
                return <Gridsome />;
            case "wordpress":
                return <Wordpress />;
            case "sass":
                return <Sass />;
            case "contentful":
                return <Contentful />;
            case "vue":
                return <Vue />;
            default: 
        }
    }
    return (
        <ul className="toolkit" aria-label="Project toolkit">
            {toolkit && toolkit.map((tool, i) => 
                <li     
                    className="toolkit__tool"
                    aria-label={tool}
                    key={i}                        
                >
                    {getTool(tool)}
                </li>
            )}
        </ul>
    )
}

export default ProjectToolkit