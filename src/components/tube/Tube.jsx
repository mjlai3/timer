import styled from 'styled-components';

export const Tube = styled.div`
  border-radius: 20px;
  background: ${props => props.background || '#EEE'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
`;