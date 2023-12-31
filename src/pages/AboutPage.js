import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin: 2rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.text};
`;


const AboutPage = () => {
  return (
    <div>
      <Card>
        <StyledParagraph>Welcome to our website (<a href="http://http://localhost:3000">Great Irbid</a>) !</StyledParagraph>
        <StyledParagraph>We are a service website with a long-standing history, having been founded in 2023. Our website provides Web development to our customers, with the aim of providing the best quality services and products.</StyledParagraph>
            <StyledParagraph>Our team consists of experienced professionals with years of experience in the field. We are dedicated to providing our customers with the best quality services and products, and strive to ensure that they get the most out of our services and products.</StyledParagraph>
            <StyledParagraph>At <strong>Great Irbid</strong>, we are committed to providing our customers with the highest quality of service and products. We pride ourselves on our customer service, and strive to ensure that our customers are satisfied with the services and products we provide.</StyledParagraph>
            <StyledParagraph>We are passionate about our work, and strive to ensure that our customers are always happy with our services and products. We take great pride in providing the best quality services and products, and strive to make sure that our customers are always happy.</StyledParagraph>
            <StyledParagraph>If you have any questions or concerns, please do not hesitate to <a href="http://localhost:3000/contact">Contact Us</a>. We are always here to help!</StyledParagraph>
        </Card>
      <Card><StyledParagraph>Thank you for visiting our website, and we look forward to serving you with the best quality services and products.</StyledParagraph></Card>
    </div>
  );
}

export default AboutPage;
