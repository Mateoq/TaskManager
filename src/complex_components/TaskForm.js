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
  FormError,
  Input,
  Label
} from '../basic_components';
import { colors } from '../constants/strings';
import { dateToISOString } from '../utils';

import { colorProp } from '../styles/utils';

const TaskFormHeadline = styled.h3``;

const initialDate = new Date().getTime();
const TaskForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [expireIn, setExpireIn] = useState(initialDate);
  const [displayError, setDisplayError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log('[FORM]', name, expireIn, props);

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

    const result = await props.addTask(name, expireIn);

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
            loading={loading}
            type="submit"
          >
            Submit
          </Button>
        </Div>
        <FormError display={displayError}>
          There was an error while creating the task.
        </FormError>
      </Form>
    </Div>
  );
};

TaskForm.propTypes = {
  addTask: propTypes.func.isRequired
};

export default TaskForm;
