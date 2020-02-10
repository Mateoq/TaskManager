/**
 * Module with the Button component.
 * @module src/basic_components/Button
 */
import styled from 'styled-components';

import { colors } from '../constants/strings';

import { colorProp } from '../styles/utils';

const Button = styled.button`
  background: ${colorProp(colors.dark)};
  border: 0;
  color: ${colorProp(colors.light)};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  padding: 12px 20px 10px;
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

export default Button;
