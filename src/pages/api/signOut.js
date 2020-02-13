/**
 * Module with the api method to destroy
 * the user session cookie.
 * @module src/pages/api/signOut
 */
import { respondError } from '../../utils';
import { cookieNames } from '../../constants/strings';

export default (req, res) => {
  if (req.method !== 'POST') {
    return;
  }

  console.log('[SIGN_OUT]', req.cookies);
  const { cookies } = req;

  if (!cookies[cookieNames.session]) {
    respondError(res);
    return;
  }

  const oldDate = new Date();
  oldDate.setDate(oldDate.getDate() - 10);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Set-Cookie', `${cookieNames.session}=none; expires=${oldDate.toUTCString()}; path=/`);
  res.end(JSON.stringify({ status: true }));
};
