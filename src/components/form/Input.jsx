import React from 'react';
import styled from 'styled-components';

export const Input = ({ className }) => {
  return (
    <StyledInput className={className} type="text" value="00:00:00" />
  );
};

const StyledInput = styled.input`
  border: 0;
  width: 100%;
  font-size: 1em;
  font-family: 'Cutive Mono', monospace;
  font-weight: 700;
  /* background: transparent; */
`;