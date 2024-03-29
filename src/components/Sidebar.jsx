import styled from "styled-components";
import logo from "../assets/svgs/logo-geegpay.svg";

import setting from "../assets/svgs/setting.svg";
import logout from "../assets/svgs/logout.svg";
import arrowRight from "../assets/svgs/arrow-right.svg";
import Theme from "./Theme";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import LinkBoard from "./LinkBoard";
import { links } from "../data/links";

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
    position: fixed;
    top: 0;
    left: 0;
    width: 15%;
    padding-top: 10rem;
    z-index: 700;
    background-color: var(--color-grey-100);
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
  align-items: center;
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
    background-color: var(--color-grey-100);
    padding-inline: 5%;
    height: 9rem;
    width: 100%;
    position: fixed;
    z-index: 500;

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

const LinkContainer = styled.div`
  position: relative;

  .linkboard {
    position: absolute;
    z-index: 1000;
    top: -70%;
    left: calc(100% + 8px);
    transition: opacity var(--link-timing) linear;
  }

  .pointer {
    position: absolute;
    top: 50%;
    left: 102%;
    transform: translateY(-50%);
    border-bottom: var(--arrow-size) solid transparent;
    border-right: var(--arrow-size) solid var(--color-grey-200);
    border-top: var(--arrow-size) solid transparent;
  }

  .linkboard,
  .pointer {
    opacity: 0;
    visibility: hidden;
  }

  &:hover .linkboard,
  &:hover .pointer {
    opacity: 1;
    visibility: visible;
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
          {links.map((link, index) => (
            <LinkContainer key={index}>
              <Img className="icon" src={link.linkIcon} alt={index} />
              <div className="linkboard">
                <LinkBoard link={link} />
              </div>
              <div className="pointer"></div>
            </LinkContainer>
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
