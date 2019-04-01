import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Recaptcha from 'react-google-recaptcha';

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
  border: 1px solid #7a4316;
  background: #f5f2f0;
`;

const Textarea = styled.textarea`
  padding: 0.3rem;
  border-radius: 5px;
  resize: none;
  width: 100%;
  border: 1px solid #7a4316;
  background: #f5f2f0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.2rem;
`;

const Button = styled.button`
  border: none;
  margin-top: 0.5rem;
  padding: 0.2rem 0.4rem;
  background: #7a4316;
  border-radius: 5px;
  color: #f5f2f0;
  cursor: pointer;
`;

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    recaptchaValue: null
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
      // for netlify
      'g-recaptcha-response': value,
      // to control submit button
      recaptchaValue: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': 'contact',
        ...this.state
      })
    })
      .then(() => navigate('/form-submitted/'))
      .catch(error => console.log(error));
  };

  render() {
    const { name, email, message, recaptchaValue } = this.state;
    return (
      <FormWrapper>
        <Form
          onSubmit={this.handleFormSubmit}
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
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
            <Textarea
              onChange={this.handleInputChange}
              value={message}
              name="message"
              placeholder="Your message"
              rows="3"
              required
            />
          </Field>
          <Recaptcha
            sitekey={process.env.SITE_RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <Button type="submit" disabled={recaptchaValue ? false : true}>
            Submit
          </Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default ContactForm;
