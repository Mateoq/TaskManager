/**
 * Module with the FormError component, used to
 * display an error message.
 * @module src/basic_components/FormError
 */
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { colors, componentProps } from '../constants/strings';

import { colorProp } from '../styles/utils';

const FormError = styled.p`
  color: ${colorProp(colors.error)};
  display: none;
  font-size: 1.0rem;
  font-weight: bold;

  ${ifProp(componentProps.display, css`
    display: block;
  `)}
`;

export default FormError;
