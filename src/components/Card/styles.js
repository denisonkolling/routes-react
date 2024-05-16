import { styled } from "styled-components";

export const CardStyled = styled.div`
  width: 250px;
  height: 325px;
  border: 1px solid #424242; //#EAF3EA
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 12px;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  flex-direction: column;

  @media (max-width: 510px) {
    width: 40vw;
  }
`;

export const ImageSection = styled.div`
  height: 50%;
  overflow: hidden;
  border-bottom: 1px solid #e6ebf1;
  @media (max-width: 510px) {
    height: 32%;
  }
`;

export const ContentSection = styled.div`
  padding: 5px 20px 20px;
  height: 50%;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.text};
  margin-top: 0.5rem;
`;

export const Location = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

export const Rate = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

export const Reviews = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

export const Distance = styled.h6`
  color: ${(props) => props.theme.colors.text};
`;
