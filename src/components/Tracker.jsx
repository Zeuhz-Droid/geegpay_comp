import styled from "styled-components";

const StyledTracker = styled.span`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 1rem;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-300);

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    z-index: 10;
    height: 1rem;
    border-radius: var(--border-radius-lg);
    background-color: ${({ color }) => color};
    width: ${({ percentage }) => `${percentage}%` || "0%"};
    animation: ${({ active }) =>
      active && "lengthen var(--platform-timing) linear"};
  }

  @keyframes lengthen {
    0% {
      width: 0%;
    }
  }
`;

function Tracker({ percentage, color, active }) {
  return (
    <StyledTracker
      color={color}
      percentage={percentage}
      active={active}
    ></StyledTracker>
  );
}

export default Tracker;
