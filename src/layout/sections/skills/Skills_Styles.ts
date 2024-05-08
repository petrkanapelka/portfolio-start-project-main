import styled from "styled-components";
import { myTheme } from "../../../styles/Theme";

const Skills = styled.section``;

const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 40px 20px 14px;

  @media ${myTheme.media.mobile} {
    padding: 62px 0 40px;
  }
`;
const SkillTitle = styled.div`
  text-transform: uppercase;
  margin: 70px 0 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
const SkillText = styled.div`
  text-align: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
    z-index: -1;
  }
`;

export const S = {
  Skills,
  Skill,
  IconWrapper,
  SkillTitle,
  SkillText,
};
