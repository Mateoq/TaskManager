/**
 * Module with some animation keyframes for styled components.
 * @module src/shared/styles/animations
 */
// Node.
import { keyframes } from 'styled-components';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export { rotation };
