import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin: 2rem;
  padding: 1rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HomePage = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <Card>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum</p>
        <p>**All above are auto generated text</p>
      </Card>
    </div>
  );
}

export default HomePage;
