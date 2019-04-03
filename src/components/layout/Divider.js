import React from 'react';
import styled from 'styled-components';

const HorizontalLine = styled.div`
  height: 1px;
  width: 100%;
  background: var(--color-secondary);
  opacity: 0.3;
  padding: 0;
  margin: 0.5rem auto;
`;

function Divider() {
  return <HorizontalLine />;
}

export default Divider;
