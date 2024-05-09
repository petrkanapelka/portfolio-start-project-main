import styled from "styled-components";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Link } from "../../../components/Link";
import { myTheme } from "../../../styles/Theme";

const Works = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`;
const Work = styled.div`
  border-color: ${myTheme.colors.secondaryBg};
  max-width: 540px;
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${myTheme.media.desktop} {
    max-width: 540px;
  }
`;
const Description = styled.div`
  padding: 25px 20px;
`;

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    transform: scale(0);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media ${myTheme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;
const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 24px;
`;
export const S = {
  Work,
  Works,
  Image,
  ImageWrapper,
  Title,
  Text,
  Description,
};
