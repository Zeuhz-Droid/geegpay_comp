import styled from "styled-components";
import smallRedGraph from "../assets/svgs/small-red-graph.svg";
import smallGreenGraph from "../assets/svgs/small-green-graph.svg";

const StyledStatistic = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  font-weight: 600;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);

  .images {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .box {
      padding: 1rem;
      border-radius: var(--border-radius-half);
      border: 1px solid var(--color-grey-200);
    }
  }

  .type {
    font-size: 1.4rem;
    color: var(--color-grey-400);
  }

  .amount {
    font-size: 2.3rem;
    color: var(--color-grey-900);
  }

  .stat {
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    &:last-child {
      color: var(--color-grey-400);
    }
  }
`;

const Percentage = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  margin-right: 0.5rem;
  gap: 0.5rem;

  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  border-radius: var(--border-radius-4xl);
`;

function Statistic({ statistic }) {
  return (
    <StyledStatistic>
      <div className="images">
        <img className="box" src={statistic.icon} alt={statistic.type} />
        <img src={statistic.graph} alt={statistic.type} />
      </div>
      <div className="type">{statistic.type}</div>
      <div className="amount">{statistic.amount}</div>
      <div className="stat">
        <Percentage color={statistic.color} bg={statistic.backgroundColor}>
          <img
            src={
              statistic.account === "profit" ? smallGreenGraph : smallRedGraph
            }
            alt={statistic.account}
          />
          {statistic.percentage}%
        </Percentage>
        <span> vs. previous month</span>
      </div>
    </StyledStatistic>
  );
}

export default Statistic;
