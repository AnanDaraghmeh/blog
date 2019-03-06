import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import styles from './index.module.css';
import NavMenu from '../components/layout/NavMenu';

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <SEO title="All posts" />
        <div className={styles.grid}>
          <NavMenu />
          <div>
            {posts.map(post => {
              return (
                <div key={post.node.fields.slug}>
                  <h3>
                    <Link to={post.node.fields.slug}>
                      {post.node.frontmatter.title}
                    </Link>
                  </h3>
                  <small>{post.node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.node.excerpt
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default HomePage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
