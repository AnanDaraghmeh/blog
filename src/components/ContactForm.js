import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

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
  padding: 0.2rem 0.4rem;
  background: #7a4316;
  border-radius: 5px;
  color: #f5f2f0;
  cursor: pointer;
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    fetch('/contact?no-cache=1"', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...this.state
      })
    })
      .then(() => navigate('/form-submitted/'))
      .catch(error => console.log(error));
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <FormWrapper>
        <Form
          onSubmit={this.handleFormSubmit}
          name="contact"
          action="/form-submitted/"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
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
            <Textarea
              onChange={this.handleInputChange}
              value={message}
              name="message"
              placeholder="Your message"
              rows="3"
              required
            />
          </Field>
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default ContactForm;
