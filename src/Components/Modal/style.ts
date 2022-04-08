import { FlexCenter, FlexBetween } from "../../GlobalStyles";
import styled from "styled-components";
export const Side = styled(FlexCenter)`
  width: 200px;
  height: 200px;
  box-shadow: -4px 4px 10px 0px rgb(0 0 0 / 8%);
  -webkit-box-shadow: -4px 4px 10px 0px rgb(0 0 0 / 8%);
  -moz-box-shadow: -4px 4px 10px 0px rgb(0 0 0 / 8%);
  font-size: 130px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
    color: #e91e63;
  }
`;
export const ModalText = styled.p`
  font-size: 20px;
`;
export const ModalTextBig = styled.p`
  font-size: 50px;
`;
export const SideContainer = styled(FlexBetween)`
  margin-top: 50px;
`;
