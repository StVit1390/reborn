// Core
import styled from 'styled-components';

// Colors
import * as colors from '../../../assets/colors';

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  color: ${colors.white.base};
  font-family: "Roboto", sans-serif;
  font-size: 5rem;`;
