import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import NavMenu from '../components/layout/NavMenu';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 850px) {
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
    const { data } = this.props;
    const posts = data.allContentfulPost.edges;
    return (
      <Layout>
        <SEO title="All posts" />
        <Grid>
          <NavMenu />
          <div>
            {posts.map(post => {
              return (
                <div key={post.node.slug}>
                  <h3 style={{ marginBottom: '0.2rem' }}>
                    <Link to={post.node.slug}>{post.node.title}</Link>
                  </h3>
                  <small>{post.node.publishDate}</small>
                  {post.node.description && (
                    <p>{post.node.description.description}</p>
                  )}
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
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          description {
            description
          }
          body {
            childMarkdownRemark {
              html
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
