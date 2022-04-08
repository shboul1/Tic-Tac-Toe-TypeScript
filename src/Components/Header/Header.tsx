import { H2, HeaderContainer, HrefLink } from "./styles";
import { FiArrowUpRight } from "react-icons/fi";
export default function Header() {
  return (
    <HeaderContainer>
      <H2>Tic Tac Toe</H2>
      <HrefLink href="https://github.com/shboul1" target="_blank">
        GitHub <FiArrowUpRight />
      </HrefLink>
    </HeaderContainer>
  );
}
