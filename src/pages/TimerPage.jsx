import React from 'react';
import styled from 'styled-components';
import { Panel } from '../components/panel/Panel';
import { Layout } from '../components/layout/Layout';
import { Text } from '../components/typography/Text';
import { Tube } from '../components/tube/Tube';
import { SharpButton } from '../components/button/SharpButton';
import { Input } from '../components/form/Input';

export const TimerPage = props => {
  return (
    <Container>
      <Layout>
        <Panel>
          <Body>
            <Tube background="#41414d">
              <Text>Repeat Timer</Text>
            </Tube>
            <Input />
          </Body>
          <Bottom>
            <BottomColumn>
              <SharpButton>Delay</SharpButton>
            </BottomColumn>
            <BottomColumn>
              <SharpButton>START</SharpButton>
            </BottomColumn>
          </Bottom>
        </Panel>
      </Layout>
    </Container>
  );
};

const Container = styled.div`

`;

const Body = styled.div`
  padding: 1em 1.5em;
`;

const Bottom = styled.div`
  display: flex;
`;

const BottomColumn = styled.div`
  &:first-child {
    width: 35%;
    border-right: 1px solid #4c4b59;
  }
  &:last-child {
    width: 65%;
  }
`;

