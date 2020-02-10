/**
 * Module with the TaskForm component used to create
 * new tasks.
 * @module src/complex_components/TaskForm
 */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import {
  Button,
  Div,
  Form,
  Input,
  Label
} from '../basic_components';
import { colors } from '../constants/strings';
import { dateToISOString } from '../utils';

import { colorProp } from '../styles/utils';
import { rotation } from '../styles/animations';

const FormError = styled.p`
  color: ${colorProp(colors.error)};
  font-size: 1.2rem;
  font-weight: bold;
`;

const Loader = styled.span.attrs({
  className: 'bx bx-loader'
})`
  animation: ${rotation} 2s linear infinite;
  font-size: 1.3rem;
  left: 41%;
  position: absolute;
  top: 10px;
`;

const TaskFormHeadline = styled.h3``;

const initialDate = new Date().getTime();
const TaskForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [expireIn, setExpireIn] = useState(initialDate);
  const [displayError, setDisplayError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log('[FORM]', name, expireIn);

    if (
      !name ||
      !name.length ||
      !expireIn ||
      !expireIn.toString().length
    ) {
      return;
    }

    setDisplayError(false);
    setLoading(true);

    const result = await props.updateTasks(result.tasks);

    console.log('[FORM_RESULT]', result);

    setName('');
    setExpireIn(initialDate);
    setLoading(false);

    if (!result.status) {
      setDisplayError(true);
      return;
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onDateChange = (e) => {
    setExpireIn(e.target.valueAsNumber);
  };

  return (
    <Div css={`
      background: ${colorProp(colors.mercury)};
      border-radius: 4px;
      padding: 16px;
    `}>
      <TaskFormHeadline>
        Create a New Task
      </TaskFormHeadline>
      <Form
        css={`padding-top: 15px;`}
        onSubmit={onSubmit}
      >
        <Label text="Name">
          <Input
            onChange={onNameChange}
            type="text"
            value={name}
          />
        </Label>
        <Label text="Date of Completion">
          <Input
            min={dateToISOString(initialDate)}
            onChange={onDateChange}
            type="date"
            value={dateToISOString(expireIn)}
          />
        </Label>
        <Div>
          <Button
            css={`
              min-width: 96px;
              min-height: 43px;
              position: relative;
            `}
            disabled={loading}
            type="submit"
          >
            {(loading) ? <Loader /> : 'Submit'}
          </Button>
        </Div>
        {(displayError) ? (
          <FormError>
            There was an error while creating the task.
          </FormError>
        ): null}
      </Form>
    </Div>
  );
};

TaskForm.propTypes = {
  updateTasks: propTypes.func.isRequired
};

export default TaskForm;
