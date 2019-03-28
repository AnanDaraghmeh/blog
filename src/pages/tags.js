import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout/Layout';
import Divider from '../components/layout/Divider';

const Heading = styled.h4`
  margin-bottom: 0;
`;

const TagList = styled.ul`
  list-style: none;
  margin: 1rem auto;
  padding: 0;
`;

const TagItem = styled.li`
  display: block;
  margin: 0 auto;
`;

const TagsPage = ({ data }) => {
  const group = data.allContentfulPost.group;
  return (
    <Layout>
      <SEO title="All tags" />
      <Heading>All Tags:</Heading>
      <Divider />
      <TagList>
        {group.map(tag => (
          <TagItem key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </TagItem>
        ))}
      </TagList>
    </Layout>
  );
};

export default TagsPage;

export const PageQuery = graphql`
  query {
    allContentfulPost(limit: 1000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
