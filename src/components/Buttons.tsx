import styled from "@emotion/styled";

export const PrimaryButton = styled.button<{ color?: string }>`
  border-style: solid;
  border: 0px;
  padding: 12px 8px;
  width: 200px;
  background-color: #FFFFFF;
  font-weight: 400;
  text-align: center;
  color: #684BB1;
  text-transform: capitalize;
  box-shadow: 2px 4px 9px 3px rgba(0, 0, 0, 0.258633);
  border-radius: 28px;
  &:hover {
    color: white;
    background-color: #E880E8;
  }
  &.active {
    color: white;
    background-color: transparent;
  }
`;


export const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  width: 40px;
  height: 40px;

  > svg {
    color: white;
    width: 20px;
    height: 20px;
  }

  &:hover {
    border: 1px solid #FF52C1;
     > svg {
      color: #FF52C1;
    }
  }
`;