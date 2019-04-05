import React from 'react';
import styled from 'styled-components';

import BIO from '../bio';
import AllTags from '../AllTags';

const TagListWrapper = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

function SideMenu() {
  return (
    <div>
      <BIO
        customName="Hi! I'm Anan, a web developer."
        text="I write about web development in general particularly things related to react."
      />
      <TagListWrapper>
        <AllTags />
      </TagListWrapper>
    </div>
  );
}

export default SideMenu;
