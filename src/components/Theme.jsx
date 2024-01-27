import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import styled from "styled-components";

const StyledTheme = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  margin-bottom: auto;
  margin-top: 2rem;
  padding: 0.5rem;
  gap: 1.5rem;

  @media (max-width: 900px) {
    /* position: absolute;
    top: 2rem;
    right: 3rem;
    flex-direction: row; */
  }
`;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-half);
  background-color: ${({ active }) =>
    active ? "var(--color-primary)" : "none"};

  & svg {
    color: ${({ active }) =>
      active ? "var(--color-white)" : "var(--color-grey-200)"};
  }
`;

function Theme() {
  const [selected, setSelected] = useState("sun");

  useEffect(() => {
    if (selected === "moon") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [selected]);

  return (
    <StyledTheme>
      <Icon active={selected === "sun"} onClick={() => setSelected("sun")}>
        <HiOutlineSun />
      </Icon>

      <Icon active={selected === "moon"} onClick={() => setSelected("moon")}>
        <HiOutlineMoon />
      </Icon>
    </StyledTheme>
  );
}

export default Theme;
