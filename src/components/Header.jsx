import styled from "styled-components";
import {
  HiOutlineBell,
  HiOutlineCalendar,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { getCurrentDate } from "../utils/helper";
import User from "./User";

const StyledHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / -1;

  font-weight: 600;
  color: var(--color-grey-800);

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-200);
  padding: 1rem 2rem;
  gap: 3rem;

  .heading {
    font-size: 2rem;
  }
`;

const Search = styled.div`
  position: relative;
  font-weight: 600;
  margin-left: auto;

  & > svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    font-size: 2.5rem;
    color: var(--color-grey-300);
    transform: translateY(-50%);
  }

  & > input {
    padding: 1rem 4rem;
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-4xl);

    &::-webkit-input-placeholder {
      font-family: inherit;
      color: var(--color-grey-300);
    }
  }
`;

const Notification = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: var(--border-radius-half);
  border: 1px solid var(--color-grey-200);

  & > svg {
    font-size: 2rem;
  }
`;

const Date = styled.div`
  & > svg {
    margin-right: 1rem;
  }
`;

function Header() {
  const { day, month, year } = getCurrentDate();

  return (
    <StyledHeader>
      <div className="heading">Dashboard</div>
      <Search>
        <HiOutlineMagnifyingGlass />
        <input type="text" placeholder="Search" />
      </Search>
      <Date>
        <HiOutlineCalendar />
        <span>
          {month} {day}, {year}
        </span>
      </Date>
      <Notification>
        <HiOutlineBell />
      </Notification>

      <User />
    </StyledHeader>
  );
}

export default Header;