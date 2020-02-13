/**
 * Module with the Auth page, which contains the login form.
 * @module src/pages/auth
 */
import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import {
  Button,
  Form,
  FormError,
  Input,
  Label
} from '../basic_components';
import { redirectServer } from '../utils';
import {
  colors,
  cookieNames,
  routes
} from '../constants/strings';

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
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username.length || !password.length) {
      return;
    }

    setLoading(true);
    setDisplayError(false);
    const response = await fetch(routes.signIn, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const result = await response.json();

    setLoading(false);

    if (!result.status){
      setDisplayError(true);
      return;
    }

    router.replace(routes.home);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <AuthContainer>
      <Head>
        <title>Tasks Manager :: Auth</title>
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
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
              <Input
                onChange={onUsernameChange}
                type="text"
                value={username}
              />
            </Label>
          </InputContainer>
          <InputContainer>
            <Label text="Password">
              <Input
                onChange={onPasswordChange}
                type="password"
                value={password}
              />
            </Label>
          </InputContainer>
          <InputContainer>
            <Button
              loading={loading}
              type="submit"
            >
              Log in
            </Button>
          </InputContainer>
          <FormError
            css={`text-align: center;`}
            display={displayError}
          >
            The user or password are incorrect. Try again...
          </FormError>
        </Form>
      </AuthInnerContainer>
    </AuthContainer>
  );
};

Auth.getInitialProps = ({ req, res }) => {
  if (req && res) {
    const { cookie } = req.headers;
    if (cookie && cookie.includes(cookieNames.session)) {
      redirectServer(res, routes.home);
    }
  }

  return {};
};

export default Auth;
