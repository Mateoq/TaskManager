/**
 * Module with the TaskList component which will display a
 * list with all the tasks available.
 * @module src/complex_components/TaskList
 */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Task } from '../basic_components';
import { taskType } from '../types';

const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 100px;
  column-gap: 20px;
  row-gap: 20px;
`;

const TaskList = (props) => {
  return (
    <TasksContainer>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          data={task}
          onClick={props.clickTask}
        />
      ))}
    </TasksContainer>
  );
};

TaskList.propTypes = {
  clickTask: propTypes.func.isRequired,
  tasks: propTypes.arrayOf(taskType)
};

TaskList.defaultProps = {
  tasks: []
};

export default TaskList;
