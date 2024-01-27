import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  border: none;
  padding: ${({ y }) => (y ? `${y}rem` : "1rem")};
  padding-inline: ${({ x }) => (x ? `${x}rem` : "2rem")};
  font-size: 1.8rem;
  font-weight: 600;
  align-self: center;
  color: ${({ color }) => (color ? color : "var(--color-grey-900)")};
  border-radius: var(--border-radius-md);
  transition: opacity var(--general-timing) linear;
  margin-top: auto;
  background-color: ${({ bgcolor }) =>
    bgcolor ? bgcolor : "var(--color-primary)"};

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
