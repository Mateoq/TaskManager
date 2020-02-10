/**
 * Module with the app styles utility functions.
 * @module src/styles/utils
 */

const  colorProp = (color) => (props) => {
  return props.theme[color];
};

export {
  colorProp
};
