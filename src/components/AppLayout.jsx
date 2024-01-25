import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  grid-template-rows: auto 1fr 1fr;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Sidebar />
      <Header />
      <Main />
    </StyledLayout>
  );
}

export default AppLayout;
