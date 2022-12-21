import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";
import { InputContainer } from "./styles";

interface InputProps {
  inputValue: string;
  onChange: (value: string) => void;
  onSetUser: (e: FormEvent<HTMLFormElement>) => void;
}

export function Input({ onChange, onSetUser, inputValue }: InputProps) {
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <InputContainer onSubmit={onSetUser}>
      <MagnifyingGlass size={40} color="#0079FE" />
      <input
        type="text"
        value={inputValue}
        placeholder="Search GitHub username..."
        onChange={handleInputValue}
        required
      />

      <button type="submit">Search</button>
    </InputContainer>
  );
}
