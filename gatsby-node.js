const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allContentfulPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allContentfulPost.edges;
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: post.node.slug,
          previous,
          next
        }
      });
    });
  });
};
