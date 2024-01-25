import styled from "styled-components";
import BarChart from "./BarChart";
import Orders from "./Orders";
import Statistics from "./Statistics";

const StyledMain = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  padding: 2rem;

  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
`;

function Main() {
  return (
    <StyledMain>
      <BarChart />
      <Orders />
      <Statistics />
    </StyledMain>
  );
}

export default Main;
