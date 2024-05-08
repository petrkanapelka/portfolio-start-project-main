import styled from "styled-components";
import { myTheme } from "../../styles/Theme";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${myTheme.colors.secondaryBg};
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
export const S = {
  Header,
};
