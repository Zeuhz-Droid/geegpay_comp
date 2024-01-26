import styled from "styled-components";
import logo from "../assets/svgs/logo-geegpay.svg";
import category from "../assets/svgs/category.svg";
import trendUp from "../assets/svgs/trend-up.svg";
import box from "../assets/svgs/box.svg";
import discount from "../assets/svgs/discount.svg";
import info from "../assets/svgs/info-circle.svg";
import profileUser from "../assets/svgs/profile-user.svg";

import setting from "../assets/svgs/setting.svg";
import logout from "../assets/svgs/logout.svg";
import arrowRight from "../assets/svgs/arrow-right.svg";
import Theme from "./Theme";

const svgsMain = [category, trendUp, box, discount, info, profileUser];

const svgsOthers = [arrowRight, setting, logout];

const StyledSidebar = styled.div`
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  border-right: 1px solid var(--color-grey-200);
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .logo {
    padding: 1rem;
  }
`;

const Img = styled.img`
  padding: 0.5rem 1rem;
  width: max-content;
  margin-inline: auto;
  border-radius: var(--border-radius-sm);
  transition: background-color var(--general-timing) linear;

  &:hover {
    background-color: var(--color-grey-300);
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Column>
        <img className="logo" src={logo} alt="main-logo" />
        {svgsMain.map((svg, index) => (
          <Img key={index} src={svg} alt={index} />
        ))}
      </Column>
      <Theme />
      <Column>
        {svgsOthers.map((svg, index) => (
          <Img key={index} src={svg} alt={index} />
        ))}
      </Column>
    </StyledSidebar>
  );
}

export default Sidebar;
