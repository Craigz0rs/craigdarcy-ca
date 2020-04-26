const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === "ContentfulProject") {
        const slug = node.title.replace(/\s+/g, '-').toLowerCase()
        createNodeField({
            node,
            name: 'slug',
            value: slug,

        })
        createNodeField({
            node,
            name: 'path',
            value: `/portfolio/${slug}`,

        })
        console.log(slug)
    }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
        allContentfulProject {
            edges {
                node {
                    fields {
                        path
                        slug
                      }
                    title
                    id
                }
            }
        }
    }
  `)
  const postTemplate = path.resolve(`./src/components/project.js`)
  result.data.allContentfulProject.edges.forEach(edge => {
      if(edge.node.fields.path && edge.node.id) {
          createPage({
            path: edge.node.fields.path,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
      }
  })
}