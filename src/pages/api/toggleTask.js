/**
 * Module with api method to toggle tasks.
 * @module src/pages/api/createTask
 */
import Tasks from '../../models/tasks';

export default (req, res) => {
  if (req.method !== 'POST') {
    return;
  }

  console.log('[TOGGLE_TASKS]', req.body);
  const { body } = req;

  if (!body.taskId) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: false }));
    return;
  }

  Tasks.toggle(body.taskId);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: true }));
};
