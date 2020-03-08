import React from 'react';
import styled from 'styled-components';

export const Panel = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
};

const Container = styled.div`
  background: #4c4b59;
  border-radius: 10px;
  overflow: hidden;
`;