/**
 * Module with the Input component.
 * @module src/basic_components/Input
 */
import styled from 'styled-components';

import { colors } from '../constants/strings';

import { colorProp } from '../styles/utils';

const Input = styled.input`
  background: ${colorProp(colors.alto)};
  border: 0;
  color: ${colorProp(colors.dark)};
  font-size: 1.0rem;
  padding: 10px 12px;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.6;
  }
`;

export default Input;
