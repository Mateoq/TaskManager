/**
 * Module with the Header component.
 * @module src/basic_components/Header
 */
import styled from 'styled-components';

import { colors } from '../constants/strings';

import { colorProp } from '../styles/utils';

const Header = styled.header`
  background: ${colorProp(colors.dark)};
  color: ${colorProp(colors.light)};
  column-gap: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  height: 60px;
  padding: 0 20px;
  width: 100%;
`;

export default Header;
