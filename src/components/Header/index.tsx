import imgLogo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={imgLogo} alt="" />
    </HeaderContainer>
  );
}
