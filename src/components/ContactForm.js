import React from 'react';
import styled, { css } from 'styled-components';
import { navigate } from 'gatsby';
import Recaptcha from 'react-google-recaptcha';

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

const Textarea = styled.textarea`
  padding: 0.3rem;
  border-radius: 5px;
  resize: none;
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

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    recaptchaValue: null,
    displayRecaptchaMessage: false,
    showSuccessOverlay: false
  };

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRecaptcha = value => {
    this.setState({
      // for netlify to accept form submission
      'g-recaptcha-response': value,
      // to show error message if the value is null
      recaptchaValue: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.recaptchaValue === null) {
      this.setState({
        displayRecaptchaMessage: true
      });
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'contact',
          ...this.state
        })
      })
        .then(() => this.setState({ showSuccessOverlay: true }))
        .catch(error => console.log(error));
    }
  };

  render() {
    const {
      name,
      email,
      message,
      displayRecaptchaMessage,
      showSuccessOverlay
    } = this.state;
    return (
      <>
        {showSuccessOverlay && (
          <FormSubmitted
            title="Thank you!"
            text="Your message has been submitted."
          />
        )}
        {!showSuccessOverlay && (
          <FormWrapper>
            <Form onSubmit={this.handleFormSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <Field>
                <Label htmlFor="name">Name:</Label>
                <Input
                  onChange={this.handleInputChange}
                  value={name}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </Field>
              <Field>
                <Label htmlFor="email">Email:</Label>
                <Input
                  onChange={this.handleInputChange}
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </Field>
              <Field>
                <Label htmlFor="message">Message:</Label>
                <Textarea
                  onChange={this.handleInputChange}
                  value={message}
                  name="message"
                  id="message"
                  placeholder="Your message"
                  rows="3"
                  required
                />
              </Field>
              <Recaptcha
                sitekey={process.env.SITE_RECAPTCHA_KEY}
                onChange={this.handleRecaptcha}
              />
              {displayRecaptchaMessage && (
                <p style={{ marginBottom: '0' }}>
                  Please check the box "I'm not a robot" to proceed!
                </p>
              )}
              <Button type="submit">Submit</Button>
            </Form>
          </FormWrapper>
        )}
      </>
    );
  }
}

export default ContactForm;
