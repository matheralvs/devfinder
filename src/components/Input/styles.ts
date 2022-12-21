import styled from "styled-components";

export const InputContainer = styled.form`
  width: 100%;
  background-color: ${(props) => props.theme["blue-600"]};
  border-radius: 10px;

  display: flex;
  align-items: center;
  padding: 0.875rem 1.5rem;
  gap: 2rem;

  &:focus-within {
    box-shadow: 0 0 0 1px ${(props) => props.theme["blue-300"]};
  }

  input[type="text"] {
    flex: 1;
    height: 100%;
    background-color: transparent;
    color: ${(props) => props.theme.white};
    border: 0;
    outline: 0;

    font-size: 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme["blue-300"]};
    }
  }

  button {
    height: calc(100% + 0.813rem);
    margin-right: -1rem;
    background-color: ${(props) => props.theme["blue-400"]};
    border: 0;
    padding: 0 1.5rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};

    cursor: pointer;
    transition: box-shadow 0.2s linear;

    &:hover {
      box-shadow: 0 0 20px 2px ${(props) => props.theme["blue-400"]};
    }
  }

  @media (max-width: 430px) {
    padding: 0.875rem 0.5rem;
    gap: 0.875rem;

    button {
      width: 30%;
      margin-right: 0;
    }
  }

  @media (max-width: 325px) {
    button {
      transform: translateX(-0.75rem);
    }
  }
`;
