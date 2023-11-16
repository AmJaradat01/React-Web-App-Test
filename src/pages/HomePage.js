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

const StyledHeading = styled.h2`
  color: ${(props) => props.theme.text};
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.text};
`;

const HomePage = () => {
  return (
    <div>
      <StyledHeading>Welcome</StyledHeading>
      <Card>
        <StyledParagraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</StyledParagraph>
        <StyledParagraph>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</StyledParagraph>
        <StyledParagraph>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum</StyledParagraph>
        <StyledParagraph>**All above are auto generated text</StyledParagraph>
      </Card>
    </div>
  );
}

export default HomePage;
