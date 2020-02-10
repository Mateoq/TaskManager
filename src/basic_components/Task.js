/**
 * Module with the Task component.
 * @module src/basic_components/Task
 */
import React from 'react';
import styled from 'styled-components';

import { colors } from '../constants/strings';
import { taskType } from '../types';
import { formatDate } from '../utils';

import { colorProp } from '../styles/utils';

const TaskCheck = styled.span.attrs((props) => ({
  className: `bx bx-${(props.done) ? 'check-square' : 'square'}`
}))`
  font-size: 1.4rem;
`;

const TaskName = styled.div`
  align-items: center;
  background: ${colorProp(colors.mineShaft)};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: ${colorProp(colors.light)};
  display: flex;
  font-size: 1.1rem;
  height: 50%;
  padding: 10px;
  width: 100%;
`;

const TaskExpiredIn = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.0rem;
  height: 50%;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

const TaskContainer = styled.div.attrs({
  tabIndex: '0'
})`
  background: ${colorProp(colors.alto)};
  border-radius: 4px;
  cursor: pointer;
  height: 100%;
  transition: box-shadow 0.3s;
  width: 100%;

  &:hover {
    /* background-color: ${colorProp(colors.dustyGray)}; */
    box-shadow: -1px 1px 4px 0px ${colorProp(colors.dimDark)};
  }
`;

const Task = ({ data }) => {
  return (
    <TaskContainer>
      <TaskName>{data.name}</TaskName>
      <TaskExpiredIn>
        {formatDate(data.expireIn)}
        <TaskCheck done={data.done}/>
      </TaskExpiredIn>
    </TaskContainer>
  );
};

Task.propTypes = {
  data: taskType
};

export default Task;
