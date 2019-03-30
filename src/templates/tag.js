import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

class Tag extends React.Component {
  render() {
    const posts = this.props.data.allContentfulPost.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.slug}>
        <Link to={`/${post.node.slug}`}>
          <h4>{post.node.title}</h4>
        </Link>
        <small>{post.node.publishDate}</small>
        <p>{post.node.description.internal.content}</p>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const totalCount = this.props.data.allContentfulPost.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`;

    return (
      <div>
        <SEO title={tag} />
        <Layout>
          <div>
            <h3>{tagHeader}</h3>
            <ul style={{ listStyle: 'none', margin: '0' }}>{postLinks}</ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Tag;

export const PageQuery = graphql`
  query($tag: String) {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          slug
          title
          publishDate(formatString: "MMMM DD, YYYY")
          description {
            internal {
              content
            }
          }
        }
      }
    }
  }
`;
