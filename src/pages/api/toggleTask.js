/**
 * Module with api method to toggle tasks.
 * @module src/pages/api/createTask
 */
import Tasks from '../../models/tasks';
import { respondError } from '../../utils';

export default (req, res) => {
  if (req.method !== 'POST') {
    return;
  }

  const { body } = req;

  if (!body.taskId) {
    respondError(res);
    return;
  }

  Tasks.toggle(body.taskId);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: true }));
};
