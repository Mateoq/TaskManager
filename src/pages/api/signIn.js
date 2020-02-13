/**
 * Module with the api method to authenticate
 * the user and create the session cookie.
 * @module src/pages/api/signIn
 */
import Users from '../../models/users';
import { respondError } from '../../utils';
import { cookieNames } from '../../constants/strings';

export default (req, res) => {
  if (req.method !== 'POST') {
    return;
  }

  const { body } = req;

  if (!body.username || !body.password) {
    respondError(res);
    return;
  }

  const user = Users.getByUsername(body.username);

  if (!user) {
    respondError(res);
    return;
  }

  if (user.password !== body.password) {
    respondError(res);
    return;
  }

  const now = new Date().getTime();
  const token = Buffer
    .from(`${user.username}${now}`)
    .toString('base64');


  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Set-Cookie', `${cookieNames.session}=${encodeURIComponent(token)}; path=/`);
  res.end(JSON.stringify({ status: true }));
};
