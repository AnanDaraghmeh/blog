import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f5f2f0;
  padding: 0.5rem;
`;
const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
`;
const TagLink = styled(Link)`
  display: inline-block;
  margin-right: 0.5rem;
`;

const TagList = () => {
  return (
    <StaticQuery
      query={tagsQuery}
      render={data => {
        const group = data.allContentfulPost.group;
        return (
          <Wrapper>
            Tags:
            <Tags>
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <TagLink to={`/tags/${tag.fieldValue}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </TagLink>
                </li>
              ))}
            </Tags>
          </Wrapper>
        );
      }}
    />
  );
};

export default TagList;

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
