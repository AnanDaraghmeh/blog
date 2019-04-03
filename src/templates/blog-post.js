import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

import Bio from '../components/bio';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import Divider from '../components/layout/Divider';
import SocialShare from '../components/SocialShare';
import PostTags from '../components/PostTags';
import { DisqusDiscussionEmbed } from '../components/Disqus';

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
    const { previous, next } = this.props.pageContext;
    const postUrl = `${this.props.data.site.siteMetadata.siteUrl}/${post.slug}`;
    const disqusConfig = {
      url: postUrl,
      identifier: post.id,
      title: post.title
    };

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
        <PostTags tags={post.tags} />
        <SocialShare
          shareUrl={postUrl}
          shareTitle={post.title}
          shareTags={post.tags}
          shareQuote={post.description.internal.content}
        />
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
        <DisqusDiscussionEmbed disqusConfig={disqusConfig} />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
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
      tags
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
