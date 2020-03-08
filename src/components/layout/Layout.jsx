import React from 'react';
import styled from 'styled-components';

export const Layout = props => {
  return (
    <Container>
      {props.children}
    </Container>
  )
};

const Container = styled.div`
  max-width: 22em;
  margin: 0 auto;
  padding: 1em;
`;