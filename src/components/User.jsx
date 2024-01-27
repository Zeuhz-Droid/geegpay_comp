import styled from "styled-components";
import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlineChevronDown,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";
import justinBergson from "../assets/svgs/justin-bergson.svg";

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0.5rem;
  gap: 1rem;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-4xl);
  position: relative;
  z-index: 5;

  .user-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .user-name {
    font-size: 1.4rem;
    color: var(--color-grey-700);
  }

  .user-mail {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--color-grey-400);
  }

  &:hover .dropdown {
    width: 100%;
    transform: translateY(0);
    visibility: visible;
  }

  @media (max-width: 900px) {
    gap: 0.5rem;
    & > img {
      width: 3.5rem;
      height: 3.5rem;
    }

    .user-name {
      font-size: 1.3rem;
    }

    .user-mail {
      font-size: 1.2rem;
    }
  }
`;

const Dropdown = styled.div`
  font-size: 1.4rem;
  display: grid;
  width: 100%;
  color: var(--color-grey-500);
  background-color: var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-200);
  padding-inline: 1rem;
  padding-top: 3rem;
  padding-bottom: 1rem;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: -1;
  width: 0%;
  visibility: hidden;
  transform: translateY(-10%);
  transition: all var(--general-timing) linear;

  & > div {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 1rem;
    transition: background-color var(--general-timing) linear;

    &:hover {
      background-color: var(--color-grey-200);
    }
  }
`;

function User() {
  return (
    <StyledUser>
      <img src={justinBergson} alt="user" />

      <div className="user-details">
        <span className="user-name">Justin Bergson</span>
        <span className="user-mail">justin@gmail.com</span>
      </div>

      <Dropdown className="dropdown">
        <div>
          <HiOutlineHome />
          <span>Home</span>
        </div>
        <div>
          <HiOutlineUser />
          <span>Profile</span>
        </div>
        <div>
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </div>
        <div>
          <HiOutlineArrowLeftOnRectangle />
          <span>Logout</span>
        </div>
      </Dropdown>

      <HiOutlineChevronDown />
    </StyledUser>
  );
}

export default User;
