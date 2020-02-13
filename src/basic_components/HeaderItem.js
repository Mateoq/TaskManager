/**
 * Module with the HeaderItem component, which can
 * either be a plain text or a button.
 * @module src/basic_components/HeaderItem
 */
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

import { colors } from '../constants/strings';

import { colorProp } from '../styles/utils';

const HeaderItem = styled.span`
  align-items: center;
  background: none;
  border: 0;
  color: ${colorProp(colors.light)};
  display: flex;
  font-size: 1.2rem;
  height: 100%;
  padding: 0 20px;

  ${switchProp(componentProps.as, {
    button: css`
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      &:active,
      &:focus {
        outline: 0;
      }
    `
  })};
`;

export default HeaderItem;
