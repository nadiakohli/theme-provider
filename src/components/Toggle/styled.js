import styled from 'styled-components';

export const Circle = styled.span`
  border-radius: 20px 20px 20px 20px;
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  
  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transform: translateX(26px);
    border-radius: 15px;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked {
    transform: translateX(26px);
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  ${Input}:checked + ${Circle}::before  {
    transform: translateX(0);
  }
`;
