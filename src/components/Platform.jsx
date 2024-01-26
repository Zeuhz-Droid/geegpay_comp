import styled from "styled-components";
import Tracker from "./Tracker";
import { useState } from "react";

const StyledPlatform = styled.div`
  display: grid;
  gap: 1rem;

  .name {
    font-weight: 600;
    color: var(--color-grey-900);
  }

  .amount {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-400);
    font-size: 1.3rem;
  }
`;
function Platform({ platform }) {
  const [active, setActive] = useState();
  return (
    <StyledPlatform
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="name">{platform.name}</div>
      <Tracker
        percentage={platform.percentage}
        color={platform.color}
        active={active}
      />
      <div className="amount">
        <span>{platform.amount}</span>
        <span>+{platform.percentageProfit}%</span>
      </div>
    </StyledPlatform>
  );
}

export default Platform;
