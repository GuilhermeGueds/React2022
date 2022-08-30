import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "../../pages/Transactions/styles";
import logo from "../../assets/Logo.svg";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
