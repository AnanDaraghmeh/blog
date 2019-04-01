import React from 'react';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

function about({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      <Image
        fluid={data.logo.childImageSharp.fluid}
        alt="logo"
        style={{ width: '150px', margin: '3rem auto' }}
      />
    </Layout>
  );
}

export default about;

export const pageQuery = graphql`
  query {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
