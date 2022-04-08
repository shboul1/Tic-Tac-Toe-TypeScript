import styled from "styled-components";
export const H2 = styled.h2`
  color: #fff;
  font-size: 30px;
`;
export const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HrefLink = styled.a`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: #e91e63;
  }
`;
