import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin: 1rem auto;
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

function Bio({ text }) {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                minWidth: '75px',
                marginRight: '1rem',
                marginBottom: '1rem'
              }}
              imgStyle={{ borderRadius: '50%' }}
            />
            <div style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
              <span style={{ display: 'block' }}>
                <strong>{author}</strong>
              </span>
              <span style={{ display: 'block' }}>{text}</span>
              <a href={`https://twitter.com/${social.twitter}`}>
                Follow me on Twitter
              </a>
            </div>
          </Container>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Bio;
