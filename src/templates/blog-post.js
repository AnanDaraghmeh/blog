import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

import Bio from '../components/bio';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import SEO from '../components/seo';

const Navigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const postThumnail = post.heroImage.fluid;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <SEO title={post.title} description={post.description.description} />
        <Header />
        <h1 style={{ marginBottom: '0' }}>{post.title}</h1>
        <p style={{ marginBottom: '0' }}>{post.publishDate}</p>

        <Image
          fluid={postThumnail}
          style={{ width: '75%', maxWidth: '700px', margin: '1rem auto' }}
          alt={post.title}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html
          }}
        />
        <hr />
        <Bio customName="Anan Daraghmeh" />
        <Navigation>
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </Navigation>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      publishDate
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
`;
