import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import FormSubmitted from './FormSubmitted';

const FormWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 90%;
  font-size: 0.9rem;
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;

const Field = styled.div`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.3rem;
  border-radius: 5px;
  width: 100%;
  border: 1px solid var(--color-secondary);
  background: var(--color-tertiary);
`;
const Label = styled.label`
  display: block;
  margin-bottom: 0.2rem;
`;

const Button = styled.button`
  border: none;
  margin-top: 0.5rem;
  padding: 0.2rem 0.4rem;
  background: var(--color-secondary);
  border-radius: 5px;
  color: var(--color-tertiary);
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background: var(--color-primary);
  }
`;

export class MailingList extends Component {
  state = {
    email: '',
    responseResult: null,
    responseMessage: null,
    showForm: true
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email).then(response => {
      this.setState({
        responseResult: response.result, //mailchimp response is either success or error
        responseMessage: response.msg, // user friendly message from mailchimp
        showForm: false
      });
    });
  };
  render() {
    const { email, responseResult, responseMessage, showForm } = this.state;
    return (
      <>
        {responseResult && (
          <FormSubmitted
            title={responseResult.toUpperCase()}
            text={ReactHtmlParser(responseMessage)}
          />
        )}
        {showForm && (
          <FormWrapper>
            <Form onSubmit={this.handleFormSubmit}>
              <Field>
                <Label>Subscribe to React For Cats newsletter:</Label>
                <Input
                  onChange={this.handleInputChange}
                  value={email}
                  type="email"
                  name="email"
                  required
                  placeholder="example@example.com"
                />
              </Field>
              <Button type="submit">Subscribe</Button>
            </Form>
          </FormWrapper>
        )}
      </>
    );
  }
}

export default MailingList;
