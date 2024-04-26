import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  border-bottom: solid 1px ${(props) => props.theme.colors.line};
  z-index: 1;
`;

export const HeaderLogoLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
`;

export const HeaderLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
`;

export const HeaderItem = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 70px;
  width: 160px;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    width: 100vw;
  }
`;

export const RightItems = styled.div`
  display: flex;
  @media (max-width: 510px) {
    display: none;
  }
`;

export const HeaderText = styled.span`
  @media (max-width: 510px) {
    display: none;
  }
`;
