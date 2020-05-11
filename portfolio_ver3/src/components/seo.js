/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { globalHistory } from "@reach/router"

function SEO({ description, lang, meta, image: metaImage, title }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        file(relativePath: {eq: "site-image.jpg"}) {
          childImageSharp {
            fixed(height: 600, width: 1200, quality: 100, fit: COVER) {
              src
              width
              height
            }
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description
  const defaultImg = 
  data.file && data.file.childImageSharp.fixed
    ? {src: data.file.childImageSharp.fixed.src, height: data.file.childImageSharp.fixed.height, width: data.file.childImageSharp.fixed.width} 
    : null
  const image =
  metaImage && metaImage.src
    ? metaImage
    : defaultImg
  
  return (
    <>
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: globalHistory.location.origin
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        image
          ? [
              {
                property: "og:image:secure_url",
                content: `${data.site.siteMetadata.siteUrl}${image.src}`,
              },
              {
                property: "og:image:width",
                content: image.width,
              },
              {
                property: "og:image:height",
                content: image.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
      )
      .concat(meta)}
    /></>
  )
}

SEO.defaultProps = {
  lang: `en-CA`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
}

export default SEO
