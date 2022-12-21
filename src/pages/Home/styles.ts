import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 770px) {
    max-width: 90%;
  }

  @media (max-width: 430px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 380px) {
    margin-top: 12rem;
    margin-bottom: 12rem;
  }
`;
