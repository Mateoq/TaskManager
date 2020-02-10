/**
 * Module with the Label component.
 * @module src/basic_components/Label
 */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../constants/strings';

import { colorProp } from '../styles/utils';

const LabelContent = styled.span`
  color: ${colorProp(colors.mineShaft)};
  cursor: pointer;
  display: block;
  margin-bottom: 2px;
`;

const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
`;

const Label = (props) => {
  return (
    <LabelContainer>
      <LabelContent>{props.text}</LabelContent>
      {props.children}
    </LabelContainer>
  );
};

Label.propTypes = {
  children: propTypes.node,
  text: propTypes.string.isRequired
};

export default Label;
