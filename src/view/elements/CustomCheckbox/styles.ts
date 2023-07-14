// Core
import styled from 'styled-components';

// Colors
import * as colors from '../../../assets/colors';

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 10px;

  & span {
    padding-right: 10px;
    text-transform: uppercase; 
    font-size: 1.5rem;
  }
`;

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  height:25px ;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px solid ${colors.white.base};
  border-radius: 3px;
`;

export const ContainerHover = styled(Container)`
  &:hover ${Checkmark} {
    background-color: #ccc;
  }
`;

export const CheckmarkAfter = styled.div`
  content: "";
  position: absolute;
  display: none;
  left: 10px;
      top: 7px;
`;

export const ContainerChecked = styled(Container)`
  input:checked ~ ${CheckmarkAfter} {
    display: block;
  }
`;

export const CheckmarkIndicator = styled.div`
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
`;

export const ContainerCheckedAfter = styled(ContainerChecked)`
  ${CheckmarkAfter} {
    &:after {
      content: "";
      position: absolute;
      display: block;
      
        ${CheckmarkIndicator} {
          content: "";
          position: absolute;
          display: block;
          left: 10px;
          top: 7px;
        }
    }
  }
`;