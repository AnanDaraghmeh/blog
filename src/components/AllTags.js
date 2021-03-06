import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--color-tertiary);
  padding: 0.5rem;
  border-radius: 5px;
`;

const TagHeading = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
`;
const TagList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  font-size: 0.8rem;
`;
const TagLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  background: var(--color-primary);
  color: white;
  padding: 0.1rem 0.2rem;
  margin-right: 0.2rem;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    background: var(--color-secondary);
    color: white;
  }
`;

const AllTags = () => {
  return (
    <StaticQuery
      query={tagsQuery}
      render={data => {
        const group = data.allContentfulPost.group;
        return (
          <Wrapper>
            <TagHeading>Tags:</TagHeading>
            <TagList>
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <TagLink to={`/tags/${tag.fieldValue}/`}>
                    {tag.fieldValue}
                  </TagLink>
                </li>
              ))}
            </TagList>
          </Wrapper>
        );
      }}
    />
  );
};

export default AllTags;

const tagsQuery = graphql`
  query {
    allContentfulPost(limit: 1000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
