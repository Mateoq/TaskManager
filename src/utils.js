/**
 * Module with some utility functions.
 * @module src/utils
 */

export function formatDate(date) {
  let d;
  if (typeof date === 'number') {
    d = new Date(date);
  } else {
    d = date;
  }

  const day = `${d.getDate()}`.padStart(2, '0');
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const result = `${month}/${day}/${d.getFullYear()}`;

  return result;
}

export function dateToISOString(date) {
  let d;

  if (typeof date === 'number') {
    d = new Date(date);
  } else {
    d = date;
  }

  const result = d.toISOString().substr(0,10);
  return result;
}

export function respondError(res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: false }));
}

export function redirectServer(res, destination) {
  res.statusCode = 301;
  res.setHeader('Location', destination);
  res.end();
}
