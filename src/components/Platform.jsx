import styled from "styled-components";
import Tracker from "./Tracker";

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
    font-size: 1.4rem;
  }
`;
function Platform({ platform }) {
  return (
    <StyledPlatform>
      <div className="name">{platform.name}</div>
      <Tracker percentage={platform.percentage} color={platform.color} />
      <div className="amount">
        <span>{platform.amount}</span>
        <span>+{platform.percentageProfit}%</span>
      </div>
    </StyledPlatform>
  );
}

export default Platform;
