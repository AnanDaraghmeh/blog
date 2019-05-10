import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import SideMenu from '../components/layout/SideMenu';
import { DisqusCommentCount } from '../components/Disqus';

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

const CommentBadge = styled.span`
  display: inline-block;
  background: var(--color-tertiary);
  font-size: 0.7rem;
  padding: 0.1rem;
  margin-left: 0.5rem;
  border-radius: 5px;
`;

class HomePage extends React.Component {
  state = {
    posts: this.props.data.allContentfulPost.edges
  };

  render() {
    const { posts } = this.state;
    return (
      <Layout>
        <SEO title="All posts" />
        <Grid>
          <SideMenu />
          <div>
            <h3>Recent Posts:</h3>
            {posts.map(post => {
              return (
                <div key={post.node.id}>
                  <h3 style={{ marginBottom: '0.2rem' }}>
                    <Link to={`/${post.node.slug}`}>{post.node.title}</Link>
                  </h3>
                  <small>{post.node.publishDate}</small>
                  <CommentBadge>
                    <DisqusCommentCount
                      disqusConfig={{
                        url: `${this.props.data.site.siteMetadata.siteUrl}/${
                          post.node.slug
                        }`,
                        identifier: post.node.id,
                        title: post.node.title
                      }}
                    />
                  </CommentBadge>
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
