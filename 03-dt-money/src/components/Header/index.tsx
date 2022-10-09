import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/Logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.DialogTrigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
