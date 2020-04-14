import React from "react"
import Layout from "../components/layout"
import Background1 from "../images/background1.svg"

const AboutMe = ({location}) => {
    const fromIndex = () => {
        if (location.state && location.state.fromIndex) {
            return location.state.fromIndex
        }
        return false
    }

    return (
      <Layout currentPage={location.pathname} index={false} fromIndex={fromIndex()}>
        <div className="aboutme grid">
            <section className="aboutme__content">
                <h1 className="aboutme__title content-header">About Me</h1>

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