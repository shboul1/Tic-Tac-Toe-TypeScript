import styled from "styled-components";
import { FlexCenter } from "../../GlobalStyles";

export const Squares = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const Square = styled(FlexCenter)`
  width: 250px;
  height: 180px;
  background-color: #e91e63;
  cursor: pointer;
  font-size: 150px;
  font-weight: bold;
`;

export const BodyContainer = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
