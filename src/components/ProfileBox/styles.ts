import styled, { css } from "styled-components";

export const ProfileBoxContainer = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme["blue-600"]};
  border-radius: 16px;
  padding: 3rem;
  margin-top: 1.5rem;

  display: flex;
  gap: 2.25rem;
  justify-content: center;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileImage = styled.img`
  width: 7.375rem;
  height: 7.375rem;
  border-radius: 50%;
`;

export const ProfileBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  flex: 1;
`;

export const ProfileBoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 1.5rem;
      font-weight: bold;
    }

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  > span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["blue-400"]};
  }

  p {
    width: 100%;
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-300"]};
  }

  @media (max-width: 770px) {
    align-items: center;
    text-align: center;

    header {
      flex-direction: column;
      gap: 0.75rem;
      align-items: center;
    }
  }

  @media (max-width: 380px) {
    p {
      width: 95%;
    }
  }
`;

export const ProfileBoxInfo = styled.div`
  background-color: ${(props) => props.theme["blue-900"]};
  padding: 1.5rem 2rem;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  gap: 5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 0.75rem;
      line-height: 1.125rem;
      color: #a8d2ff;
    }

    strong {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 430px) {
    gap: 1.75rem;
  }

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

export const ProfileBoxFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

interface ProfileBoxSocialProps {
  variant?: "enabled" | "disabled";
}

export const ProfileBoxSocial = styled.div<ProfileBoxSocialProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 0.75rem;
  }

  a {
    font-size: 0.75rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme["blue-400"]};
    }
  }

  svg,
  span,
  a {
    opacity: ${(props) => (props.variant === "disabled" ? "0.5" : "1")};
    color: ${(props) =>
      props.variant === "disabled"
        ? props.theme["gray-300"]
        : props.theme.white};
  }
`;
