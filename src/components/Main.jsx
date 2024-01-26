import styled from "styled-components";
import Chart from "./Chart";
import Orders from "./Orders";
import Statistics from "./Statistics";
import Platforms from "./Platforms";

const StyledMain = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  padding: 2rem;

  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
`;

function Main() {
  return (
    <StyledMain>
      <Chart />
      <Orders />
      <Statistics />
      <Platforms />
    </StyledMain>
  );
}

export default Main;
