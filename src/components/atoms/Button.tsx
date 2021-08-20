import styled from 'styled-components';

type ButtonProps = {
  background: string;
  outline: string;
};

export const Button = styled.a<ButtonProps>`
  display: inline-block;
  appearance: button;
  -moz-appearance: button;
  -webkit-appearance: button;
  text-align: center;
  text-decoration: none;
  font-family: 'Manrope';
  font-weight: 200;
  font-size: 15px;
  vertical-align: middle;
  padding: 1em 2em;
  cursor: pointer;

  transition: all 0.2s ease;
  box-sizing: border-box;

  background: ${(props) => props.background};
  border: 1px solid ${(props) => props.outline};
  color: ${(props) => props.outline};

  &:hover {
    background: ${(props) => props.outline};
    border: 1px solid ${(props) => props.background};
    color: ${(props) => props.background};
    transition: 0.3s ease-out;
  }
`;
