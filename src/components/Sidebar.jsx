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
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";

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

  .logo {
    padding: 1rem;
  }

  @media (max-width: 900px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 15%;
    padding-top: 5rem;
    z-index: 10;
    background-color: var(--color-grey-50);
    transition: transform var(--general-timing) linear;
    transform: ${({ menu }) => (menu ? "translateX(0)" : "translateX(-100%)")};

    .logo {
      display: none;
    }
  }
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const MobileLogo = styled.span`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-600);
    position: absolute;
    padding-inline: 5%;
    width: 100%;
    top: 3rem;

    & > img {
      left: 3rem;
      width: 5rem;
    }

    & > svg {
      margin-left: auto;

      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

function Sidebar() {
  const [menu, setMenu] = useState();
  return (
    <>
      <MobileLogo>
        <img src={logo} alt="main-logo" />
        {menu ? (
          <HiOutlineXMark onClick={() => setMenu(false)} />
        ) : (
          <HiOutlineBars3 onClick={() => setMenu(true)} />
        )}
      </MobileLogo>
      <StyledSidebar menu={menu}>
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
    </>
  );
}

export default Sidebar;
