import React from 'react'
import Img from "gatsby-image"
import Overlay from "../images/header__overlay.svg"

const ProjectTile = ({ project }) => {
    const title = project.title
    return (
        <article className="project-tile">
            <div className="project-tile__content-wrap">
                <header className="project-tile__header">
                    <h1 className="project-tile__title">{title && title}</h1>
                </header>
                {project.gitHub && 
                    <a 
                        href={project.gitHub} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-tile__link project-tile__link--github"
                    >
                        View Project on GitHub
                    </a>
                }
                {project.liveSites && project.liveSites.sites && project.liveSites.sites.map((site, i) => 
                    <a 
                        key={i}
                        href={site.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="project-tile__link project-tile__link--live-site"
                    >
                        View Live {site.type} Site
                    </a>
                )}
            </div>
            <div className="project-tile__image-wrap">
                {project.summaryImage && project.summaryImage.localFile.childImageSharp.fixed &&
                    <Img fixed={ project.summaryImage.localFile.childImageSharp.fixed} 
                    style={{height: '100%', left: '-50%'}}
                    />
                }
            </div>
            <div className="project-tile__overlay-wrap">
                <Overlay />
            </div>
        </article>
    )
}

export default ProjectTile