const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
        allContentfulProject {
            edges {
                node {
                    title
                    id
                }
            }
        }
    }
  `)
  const postTemplate = path.resolve(`./src/components/project.js`)
  result.data.allContentfulProject.edges.forEach(edge => {
      if(edge.node.title && edge.node.id) {
          const slug = edge.node.title.replace(/\s+/g, '-').toLowerCase()
          createPage({
            path: `portfolio/${slug}`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
      }
  })
}