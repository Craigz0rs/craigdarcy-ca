import React from 'react'
import Img from "gatsby-image"
import Overlay from "../images/header__overlay.svg"
import ProjectToolkit from "./project-toolkit"
import GitHub from "../images/icon__github--hollow.svg"
import Wordpress from "../images/icon__wordpress--hollow.svg"
import GatsbyHollow from "../images/icon__gatsby--hollow.svg"
import GridsomeHollow from "../images/icon__gridsome--hollow.svg"

const ProjectTile = ({ project }) => {
    const title = project.title
    const getSiteIcon = (toolName) => {
        switch (toolName.toLowerCase()) {
            case "gatsby":
                return <GatsbyHollow />;
            case "wordpress":
                return <Wordpress />;
            case "gridsome":
                return <GridsomeHollow />;
            default: 
        }
    }
    const capitalizeFirstChar = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
    
    return (
        <article className="project-tile">
            <div className="project-tile__content-wrap">
                <header className="project-tile__header">
                    <h1 className="project-tile__title screenreader-text">{title && title}</h1>
                    <div 
                        className="project-tile__logo-wrap"
                        dangerouslySetInnerHTML={project.logo && project.logo.svg && {__html: project.logo.svg.content}}
                    >
                    </div>
                    <h2 className="project-tile__subtitle project-tile__animate">{project.subheading && project.subheading}</h2>
                </header>
                <div className="project-tile__copy">
                    {project.summary && <p>{project.summary.summary}</p>}
                </div>
                <div className="project-tile__link-wrap">
                    {project.gitHub && 
                        <a 
                            href={project.gitHub} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-tile__link project-tile__link--github project-tile__animate"
                        >
                            <GitHub /><span>View Project on GitHub</span>
                        </a>
                    }
                    {project.liveSites && project.liveSites.sites && project.liveSites.sites.map((site, i) => 
                        <a 
                            key={i}
                            href={site.url}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="project-tile__link project-tile__link--live-site project-tile__animate"
                        >
                            {site.type &&
                                getSiteIcon(site.type)
                            }
                            {site.type &&  
                                <span>View Live {capitalizeFirstChar(site.type)} Site</span>
                            }
                        </a>
                    )}
                </div>
            </div>
            <div className="project-tile__image-wrap">
                {project.summaryImage && project.summaryImage.localFile.childImageSharp.fixed &&
                    <Img fixed={ project.summaryImage.localFile.childImageSharp.fixed} 
                    style={{height: '100%', width: '100%'}}
                    />
                }
            </div>
            <div className="project-tile__toolkit-wrap project-tile__animate">
                {project.toolkit && <ProjectToolkit toolkit={project.toolkit} />}
            </div>
            <div className="project-tile__overlay-wrap">
                <Overlay />
            </div>
        </article>
    )
}

export default ProjectTile