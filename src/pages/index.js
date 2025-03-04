/**
 * Module with the home page, which displays a header,
 * the tasks form and the tasks list.
 * @module src/pages/index
 */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import Tasks from '../models/tasks';

import {
  Div,
  Header,
  HeaderItem
} from '../basic_components';
import TaskForm from '../complex_components/TaskForm';
import TaskList from '../complex_components/TaskList';
import { redirectServer } from '../utils';
import {
  cookieNames,
  colors,
  componentProps,
  routes
} from '../constants/strings';
import { taskType } from '../types';

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr 1fr 1fr;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "header header header header"
    "taskform main main main";
  height: 100vh;
`;

const HeaderContainer = styled.div`
  grid-area: header;
`;

const TaskFormContainer = styled.div`
  grid-area: taskform;
  padding: 32px 16px;
`;

const TasksContainer = styled.div`
  grid-area: main;
  padding: 32px 16px;
`;

const Home = (props) => {
  const router = useRouter();
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = async (name, expireIn) => {
    const response = await fetch(routes.createTask, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, expireIn })
    });
    const result = await response.json();

    if (result.status) {
      setTasks(result.tasks);
    }

    return result;
  };

  const toggleTask = async (taskId) => {
    const response = await fetch(routes.toggleTask, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId })
    });
    const result = await response.json();

    if (result.status) {
      setTasks(tasks.map((task) => {
        if (task.id === taskId) {
          task.done = !task.done;
        }
        return task;
      }));
    }

    return result;
  };

  const signOut = async () => {
    const response = await fetch(routes.signOut, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();

    if (!result.status) {
      return;
    }

    router.replace(routes.auth);
  };

  return (
    <Container>
      <Head>
        <title>Tasks Manager :: Home</title>
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <HeaderContainer>
        <Header>
          <Div>
            <HeaderItem
              as="button"
              onClick={signOut}
            >
              Sign Out
            </HeaderItem>
          </Div>
          <Div css={`
            place-self: center;
          `}>
            <HeaderItem>
              Tasks
            </HeaderItem>
          </Div>
        </Header>
      </HeaderContainer>
      <TaskFormContainer>
        <TaskForm addTask={addTask}/>
      </TaskFormContainer>
      <TasksContainer>
        <TaskList tasks={tasks} clickTask={toggleTask}/>
      </TasksContainer>
    </Container>
  );
};

Home.getInitialProps = ({ req, res }) => {
  if (req && res) {
    const { cookie } = req.headers;
    if (!cookie || !cookie.includes(cookieNames.session)) {
      redirectServer(res, routes.auth);
    }
  }

  return { tasks: Tasks.get() || [] };
};

Home.propTypes = {
  tasks: propTypes.arrayOf(taskType)
};

export default Home;
