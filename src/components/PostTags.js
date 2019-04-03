import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--color-tertiary);
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

const PostTags = ({ tags }) => {
  return (
    <Wrapper>
      <Tags>
        {tags.map((tag, index) => {
          return (
            <TagLink to={`/tags/${tag}`} key={index}>
              {tag}
            </TagLink>
          );
        })}
      </Tags>
    </Wrapper>
  );
};

export default PostTags;
