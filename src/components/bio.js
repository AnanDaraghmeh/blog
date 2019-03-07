import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styles from './layout/Layout.module.css';

function Bio({ text }) {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div className={styles.bio}>
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
          </div>
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
