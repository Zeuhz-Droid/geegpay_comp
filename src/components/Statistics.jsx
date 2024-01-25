import styled from "styled-components";
import { statistics } from "../data/statistics";
import Statistic from "./Statistic";

const StyledStatistics = styled.div`
  width: 100%;
  grid-column: 2 / -1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
`;

function Statistics() {
  return (
    <StyledStatistics>
      {statistics.map((statistic) => (
        <Statistic statistic={statistic} key={statistic.id} />
      ))}
    </StyledStatistics>
  );
}

export default Statistics;
