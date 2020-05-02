import React from 'react'
import Img from "gatsby-image"

const ProjectTile = ({ project }) => {
    const title = project.title
    return (
        <article className="project-tile">
            <h1 className="project-tile__title">{title && title}</h1>
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
            {project.summaryImage && project.summaryImage.localFile.childImageSharp.fixed &&
                <Img fixed={ project.summaryImage.localFile.childImageSharp.fixed} />
            }
        </article>
    )
}

export default ProjectTile