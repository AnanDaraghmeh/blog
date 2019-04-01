import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Thanks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
`;

class FormSubmitted extends React.Component {
  render() {
    return (
      <Thanks>
        <h3>Thank you!</h3>
        <p>Your message has been submitted.</p>
        <Link to="/">Return to home page</Link>
      </Thanks>
    );
  }
}

export default FormSubmitted;
