/**
 * Module with some prop types definitions.
 * @module src/types
 */
import propTypes from 'prop-types';

export const taskType = propTypes.shape({
  id: propTypes.string,
  name: propTypes.string,
  expireIn: propTypes.number,
  done: propTypes.bool
});
