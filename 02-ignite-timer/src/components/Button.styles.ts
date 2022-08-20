import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secundary" | "danger" | "sucess";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const ButtonVariants = {
  primary: "purple",
  secundary: "orange",
  danger: "red",
  sucess: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 10px;
  border-radius: 4px;
  border: 0;
  color: #fff;
  font-weight: 800;

  background-color: ${(props) => props.theme["green-500"]};
  /* ${(props) => {
    return css`
      background-color: ${ButtonVariants[props.variant]};
    `;
  }} */
`;
