import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin: 2rem auto;
  max-width: 500px;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid ${(props) => props.theme.inputBorder};
  background-color: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.text};
  border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid ${(props) => props.theme.inputBorder};
  background-color: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.text};
  border-radius: 4px;
`;

const StyledButton = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.buttonText};
  background-color: ${(props) => props.theme.buttonBackground};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
`;

const SuccessMessage = styled.div`
  color: ${(props) => props.theme.successText};
`;

const ErrorMessage = styled.span`
  color: red;
`;

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateName = (value) => {
    const nameRegex = /^[a-zA-Z\s,.'-]{3,}$/;
    if (!value.trim()) {
      setNameError('Name is required');
    } else if (!nameRegex.test(value)) {
      setNameError('Please enter a valid Name');
    } else {
      setNameError('');
    }
  }

  const validateEmail = (value) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.trim()) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validateMessage = (value) => {
    const messageRegex = /^[^<>{}]*$/;
    if (!value.trim()) {
      setMessageError('Message is required');
    } else if (!messageRegex.test(value)) {
      setMessageError('Invalid characters in message');
    } else {
      setMessageError('');
    }
  };

  const handleNameChange = (event) => {
    const newValue = event.target.value;
    setName(newValue);
    validateName(newValue);
  };

  const handleEmailChange = (event) => {
    const newValue = event.target.value;
    setEmail(newValue);
    validateEmail(newValue);
  };

  const handleMessageChange = (event) => {
    const newValue = event.target.value;
    setMessage(newValue);
    validateMessage(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateName(name);
    validateEmail(email);
    validateMessage(message);

    if (nameError || emailError || messageError || !name || !email || !message) {
      alert('Please correct the errors before submitting.');
      return;
    }

    setSuccessMessage('Your message has been sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <Card>
        <h3>Contact Us</h3>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            <span>Your Full Name:</span>
            <StyledInput type="text" name="name" value={name} onChange={handleNameChange} />
            {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
          </StyledLabel>
          <StyledLabel>
            <span>Your Email:</span>
            <StyledInput type="email" name="email" value={email} onChange={handleEmailChange} />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </StyledLabel>
          <StyledLabel>
            <span>Your Message:</span>
            <StyledTextArea name="message" value={message} onChange={handleMessageChange} />
            {messageError && <ErrorMessage>{messageError}</ErrorMessage>}
          </StyledLabel>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </Card>
      <Card>Contact us at: Irbid@Great.local</Card>
    </div>
  );
};

export default ContactPage;
