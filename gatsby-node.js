const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allContentfulPost(
        sort: { fields: [publishDate], order: ASC }
        limit: 10000
      ) {
        edges {
          node {
            title
            slug
            publishDate
            tags
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allContentfulPost.edges;
    posts.forEach((post, index) => {
      const previous = index === 0 ? null : posts[index - 1].node;
      const next = index === posts.length - 1 ? null : posts[index + 1].node;

      createPage({
        path: post.node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        tags: post.node.tags,
        context: {
          slug: post.node.slug,
          previous,
          next
        }
      });
    });

    let tags = [];
    posts.forEach(post => {
      if (!tags.includes(post.node.tags)) {
        tags = [...tags, ...post.node.tags];
      }
    });

    tags.forEach(tag => {
      createPage({
        path: `tags/${tag}`,
        component: path.resolve(`./src/templates/tag.js`),
        context: {
          tag
        }
      });
    });
  });
};
