const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const uXDetailTemplate = path.resolve(`src/templates/ux-detail.js`)
  const editorialDetailTemplate = path.resolve(
    `src/templates/editorial-detail.js`
  )

  return graphql(`
    {
      uxQuery: allContentfulUx {
        edges {
          node {
            slug
          }
        }
      }
      editorialQuery: allContentfulEditorial {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.uxQuery.edges.forEach(edge => {
      createPage({
        path: `/ux/${edge.node.slug}`,
        component: uXDetailTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })

    result.data.editorialQuery.edges.forEach(edge => {
      createPage({
        path: `/editorial/${edge.node.slug}`,
        component: editorialDetailTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
