import styled from "styled-components";
import BarChart from "./BarChart";
import { useState } from "react";

const StyledChart = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-white);
  padding: 1.5rem;

  .heading-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    font-weight: 600;
  }

  .heading {
    font-size: 2rem;
  }

  .select-group {
    font-size: 1.4rem;
    color: var(--color-grey-500);
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .select {
    padding: 1rem 0.8rem;
    background-color: var(--color-white);
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-lg);
  }
`;

function Chart() {
  const [value, setValue] = useState();

  return (
    <StyledChart>
      <div className="heading-container">
        <div className="heading">Sales Trends</div>
        <div className="select-group">
          <div>Shorty by:</div>
          <select
            className="select"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Annually</option>
          </select>
        </div>
      </div>
      <BarChart />
    </StyledChart>
  );
}

export default Chart;
