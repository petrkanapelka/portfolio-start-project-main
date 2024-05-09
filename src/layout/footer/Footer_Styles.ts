import styled from "styled-components";
import { font } from "../../styles/Common";
import { myTheme } from "../../styles/Theme";

const Footer = styled.footer`
  background-color: ${myTheme.colors.primaryBg};
  padding: 40px 0;
`;
const Name = styled.h4`
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: 3px;

  ${font({
    weight: 700,
    Fmax: 22,
    Fmin: 16,
    family: myTheme.fonts.primaryFamily,
  })};
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  margin: 30px 0 30px;
`;

const SocialLink = styled.li`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${myTheme.colors.accent};

  &:hover {
    color: ${myTheme.colors.primaryBg};
    transform: translateY(-4px);
    background: #7572d5;
    cursor: pointer;
  }
`;

const SocialItem = styled.div``;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

export const S = {
  Footer,
  Name,
  SocialList,
  SocialLink,
  SocialItem,
  Copyright,
};
