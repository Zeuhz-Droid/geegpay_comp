import styled from "styled-components";
import smallRedGraph from "../assets/svgs/small-red-graph.svg";
import smallGreenGraph from "../assets/svgs/small-green-graph.svg";

const StyledStatistic = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: 1.5rem;
  font-weight: 600;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  position: relative;

  .images {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .box {
    padding: 1rem;
    border-radius: var(--border-radius-half);
    border: 1px solid var(--color-grey-200);
  }

  .type {
    font-size: 1.4rem;
    color: var(--color-grey-400);
  }

  .amount {
    justify-self: flex-start;
    font-size: 2.3rem;
    color: var(--color-grey-900);
    transition: all var(--general-timing) linear;
  }

  .stat {
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    &:last-child {
      color: var(--color-grey-400);
    }
  }

  .percentage {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    margin-right: 0.5rem;
    gap: 0.5rem;

    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};
    border-radius: var(--border-radius-4xl);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      /* z-index: -1; */
      transition: background-color var(--statistics-timing) linear,
        box-shadow var(--statistics-timing) linear;
    }
  }

  .box,
  .amount,
  .statistics,
  .percentage,
  .amount,
  .stat {
    transition: transform var(--statistics-timing) linear;
  }

  &:hover {
    .amount {
      transform: scale(1.2) translateX(12px);
    }

    .box {
      transform: rotate(360deg);
    }

    .percentage {
      &::before {
        box-shadow: 0 0 10px -2px ${({ color }) => color};
      }
    }
  }

  @media (max-width: 900px) {
    gap: 1rem;
  }
`;

function Statistic({ statistic }) {
  return (
    <StyledStatistic color={statistic.color} bg={statistic.backgroundColor}>
      <div className="images">
        <img className="box" src={statistic.icon} alt={statistic.type} />
        <img src={statistic.graph} alt={statistic.type} />
      </div>
      <div className="type">{statistic.type}</div>
      <div className="amount">{statistic.amount}</div>
      <div className="stat">
        <div className="percentage">
          <img
            src={
              statistic.account === "profit" ? smallGreenGraph : smallRedGraph
            }
            alt={statistic.account}
          />
          {statistic.percentage}%
        </div>
        <span> vs. previous month</span>
      </div>
    </StyledStatistic>
  );
}

export default Statistic;
