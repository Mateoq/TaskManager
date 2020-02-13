/**
 * Module with the Button component.
 * @module src/basic_components/Button
 */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { colors } from '../constants/strings';

import { colorProp } from '../styles/utils';
import { rotation } from '../styles/animations';

const Loader = styled.span.attrs({
  className: 'bx bx-loader'
})`
  animation: ${rotation} 2s linear infinite;
  font-size: 1.3rem;
  left: 41%;
  position: absolute;
  top: 10px;
`;

const InnerButton = styled.button`
  background: ${colorProp(colors.dark)};
  border: 0;
  color: ${colorProp(colors.light)};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  min-width: 96px;
  min-height: 43px;
  padding: 12px 20px 10px;
  position: relative;
  text-decoration: none;
  transition: background-color 0.1s;

  &:hover {
  background: ${colorProp(colors.mineShaft)};
  border: 0;
  }

  &:disabled {
  cursor: auto;
  opacity: 0.5;
  pointer-events: none;
  }
`;

const Button = (props) => {
  return (
    <InnerButton
      disabled={props.loading || props.disabled}
      type="submit"
    >
      {(props.loading) ? <Loader /> : props.children}
    </InnerButton>
  );
};

Button.propTypes = {
  children: propTypes.node,
  disabled: propTypes.bool,
  loading: propTypes.bool
};

export default Button;
