import React from 'react';
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
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const ContactPage = () => {
  return (
    <div>
      <Card>
        <h3>Contact Us</h3>
        <StyledForm>
          <StyledLabel>
            <span>Your Full Name:</span>
            <StyledInput type="text" name="name" required />
            <ErrorMessage className="error-message"></ErrorMessage>
          </StyledLabel>
          <StyledLabel>
            <span>Your Email:</span>
            <StyledInput type="email" name="email" required />
            <ErrorMessage className="error-message"></ErrorMessage>
          </StyledLabel>
          <StyledLabel>
            <span>Your Message:</span>
            <StyledTextArea name="message" required></StyledTextArea>
            <ErrorMessage className="error-message"></ErrorMessage>
          </StyledLabel>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </Card>
      <Card>Contact us at: Irbid@Great.local</Card>
    </div>
  );
};

export default ContactPage;
