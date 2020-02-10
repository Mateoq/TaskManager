/**
 * Module with the Form component.
 * @module src/basic_components/Form
 */
import styled from 'styled-components';

const Form = styled.form.attrs({
  autoComplete: 'off'
})`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default Form;
