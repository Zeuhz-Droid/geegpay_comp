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
    const mode = localStorage.getItem("mode");
    handleTheme(mode);
  }, []);

  function handleTheme(mode) {
    if (mode === "moon") {
      setSelected("moon");
      localStorage.setItem("mode", "moon");
      document.body.classList.add("dark");
    } else {
      setSelected("sun");
      localStorage.setItem("mode", "sun");
      document.body.classList.remove("dark");
    }
  }

  return (
    <StyledTheme>
      <Icon active={selected === "sun"} onClick={() => handleTheme("sun")}>
        <HiOutlineSun />
      </Icon>

      <Icon active={selected === "moon"} onClick={() => handleTheme("moon")}>
        <HiOutlineMoon />
      </Icon>
    </StyledTheme>
  );
}

export default Theme;
