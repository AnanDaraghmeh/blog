import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import SideMenu from '../components/layout/SideMenu';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 3fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 3fr;
    grid-gap: 4rem;
  }
`;

class HomePage extends React.Component {
  render() {
    const posts = this.props.data.allContentfulPost.edges;

    return (
      <Layout>
        <SEO title="All posts" />
        <Grid>
          <SideMenu />
          <div>
            {posts.map(post => {
              return (
                <div key={post.node.id}>
                  <h3 style={{ marginBottom: '0.2rem' }}>
                    <Link to={`/${post.node.slug}`}>{post.node.title}</Link>
                  </h3>
                  <small>{post.node.publishDate}</small>
                  <p>
                    {post.node.description.internal.content ||
                      post.node.body.childMarkdownRemark.excerpt}
                  </p>
                </div>
              );
            })}
          </div>
        </Grid>
      </Layout>
    );
  }
}

export default HomePage;

export const pageQuery = graphql`
  query {
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          description {
            internal {
              content
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
          heroImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
