import styled from "styled-components";
import { myTheme } from "../../styles/Theme";

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  text-align: center;
`;

const Slide = styled.div``;

const Text = styled.p``;

const Name = styled.span`
  font-family: ${myTheme.fonts.secondaryFamily};
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  margin: 12px 0 26px;
  display: inline-block;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    border-radius: 20px;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);

    & + span {
      margin-left: 5px;
    }
    &.active {
      background-color: ${myTheme.colors.accent};
      width: 20px;
    }
  }
`;

export const S = {
  Slider,
  Slide,
  Text,
  Name,
  Pagination,
};
