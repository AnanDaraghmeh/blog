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
    const post = this.props.data.markdownRemark;
    const postThumnail = post.frontmatter.thumbnail.childImageSharp.fluid;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Header />
        <h1 style={{ marginBottom: '0' }}>{post.frontmatter.title}</h1>
        <p style={{ marginBottom: '0' }}>{post.frontmatter.date}</p>

        <Image
          fluid={postThumnail}
          style={{ width: '75%', maxWidth: '700px', margin: '1rem auto' }}
          alt={post.frontmatter.title}
        />

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Bio customName="Anan Daraghmeh" />
        <Navigation>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
