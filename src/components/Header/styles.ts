import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.75rem;

  @media (max-width: 770px) {
    img {
      max-width: 50%;
    }
  }
`;
