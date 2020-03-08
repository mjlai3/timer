import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export const SharpButton = ({ children, className }) => {
  return (
    <Button className={className}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  background: #94c727;
  padding: 1em;
  border: 0;
  color: #FFF;
  font-weight: 700;
  width: 100%;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover, &:focus {
    background: ${darken(0.1, '#94c727')};
  }
`;