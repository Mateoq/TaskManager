import React from 'react';
import styled from 'styled-components';

import {
  Button,
  Form,
  Input,
  Label
} from '../basic_components';
import { colors } from '../constants/strings';

import { colorProp } from '../styles/utils';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AuthContainer = styled.div`
  align-items: center;
  background: ${colorProp(colors.light)};
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 5%;
  width: 100vw;
`;

const AuthInnerContainer = styled.div`
  background: ${colorProp(colors.mercury)};
  border-radius: 4px;
  padding: 16px;
  width: 320px;
`;

const AuthHeadline = styled.h3`
  text-align: center;
`;

const Auth = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  console.log('[AUTH]', props);
  return (
    <AuthContainer>
      <AuthInnerContainer>
        <AuthHeadline>
          Please Sign In
        </AuthHeadline>
        <Form
          css={`padding-top: 15px;`}
          onSubmit={onSubmit}
        >
          <InputContainer>
            <Label text="Username">
              <Input type="text"/>
            </Label>
          </InputContainer>
          <InputContainer>
            <Label text="Password">
              <Input type="password"/>
            </Label>
          </InputContainer>
          <InputContainer>
            <Button type="submit">
              Log in
            </Button>
          </InputContainer>
        </Form>
      </AuthInnerContainer>
    </AuthContainer>
  );
};

export default Auth;
