/**
 * Module with api method to create tasks.
 * @module src/pages/api/createTask
 */
import Tasks from '../../models/tasks';

export default (req, res) => {
  if (req.method !== 'POST') {
    return;
  }

  console.log('[CREATE_TASKS]', req.body);
  const { body } = req;

  if (!body.name || !body.expireIn) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: false }));
    return;
  }

  Tasks.create(body.name, body.expireIn);
  const tasks = Tasks.get();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ tasks, status: true }));
};
