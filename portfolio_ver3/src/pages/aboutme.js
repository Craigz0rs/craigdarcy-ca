import React from "react"
import Background1 from "../images/background1.svg"
import SEO from "../components/seo"
import Layout from "../components/layout"

const AboutMe = () => {
    return (
        <Layout>
        <SEO 
            title="About Me"
            description="All about me, my work, and the things I like to do with code."
        />
        <div className="aboutme grid">
            <section className="aboutme__content">
                <h1 className="aboutme__title content-header text__gradient">About Me</h1>
                <p>
                    JAMstack and WordPress developer with a knack for design and an interest in SVG animations.
                </p>
                <p>
                    I've worked with agencies and small businesses to create custom WordPress solutions since 2017. Currently 
                    working remotely for <a href="http://www.thinkmuse.ca" target="_blank" rel="noopener noreferrer" className="link--inline text__gradient">Think Muse</a> as a front-end developer.
                </p>
                <p>
                    I enjoy building serverless JAMstack sites with React's Gatsby and Vue's Gridsome static site generators, while incorporating WordPress as a familiar
                    headless CMS solution.
                </p>
            </section>
            <div className="aboutme__background-wrap">
                <div className="aboutme__background">
                    <Background1 />
                </div>
            </div>
        </div>
    </Layout>
    )
  }

export default AboutMe