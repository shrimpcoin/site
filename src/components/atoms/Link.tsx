import styled from 'styled-components';

type LinkProps = {
  color: string;
  fadecolor: string;
};

export const Link = styled.a<LinkProps>`
  display: inline;
  text-align: center;
  text-decoration: none;
  font-family: 'Manrope';
  font-weight: 200;
  font-size: 20px;
  // vertical-align: middle;
  padding: 1em 2em;

  transition: all 0.2s ease;
  box-sizing: border-box;

  color: ${(props) => props.color};

  &:hover {
    color: ${(props) => props.fadecolor};
    transition: 0.3s ease-out;
  }
`;
