import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

import Bio from '../components/bio';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import TagList from '../components/TagList';
import Divider from '../components/layout/Divider';

const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const postHeroImage = post.heroImage.fluid;
    const postDescription =
      post.description.internal.content ||
      post.body.childMarkdownRemark.excerpt;
    const postBody = post.body.childMarkdownRemark.html;
    const postTags = post.tags;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <SEO title={post.title} description={postDescription} />
        <h1 style={{ marginBottom: '0' }}>{post.title}</h1>
        <p style={{ marginBottom: '0' }}>{post.publishDate}</p>

        <Image
          fluid={postHeroImage}
          style={{ width: '75%', maxWidth: '700px', margin: '1rem auto' }}
          alt={post.title}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: postBody
          }}
        />
        <Divider />
        <TagList tagsArray={postTags} />
        <Divider />
        <Bio customName="Anan Daraghmeh" />
        <Navigation>
          <li>
            {previous && (
              <Link to={`/${previous.slug}`} rel="prev">
                ← Previous Post
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.slug}`} rel="next">
                Next Post →
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
      tags
    }
  }
`;
