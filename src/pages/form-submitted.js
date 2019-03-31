import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';

const Thanks = styled.div`
  margin: 3rem auto;
`;

function formSubmitted() {
  return (
    <Layout>
      <Thanks>
        <h3>Thank you!</h3>
        <p>Your message has been submitted.</p>
        <Link to="/">Go back to home page</Link>
      </Thanks>
    </Layout>
  );
}

export default formSubmitted;
