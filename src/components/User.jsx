import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi2";
import justinBergson from "../assets/svgs/justin-bergson.svg";

const StyledUser = styled.div`
  border: 1px solid var(--color-grey-200);
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0.5rem;
  gap: 1rem;
  border-radius: var(--border-radius-4xl);

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
`;

function User() {
  return (
    <StyledUser>
      <img src={justinBergson} alt="user" />

      <div className="user-details">
        <span className="user-name">Justin Bergson</span>
        <span className="user-mail">justin@gmail.com</span>
      </div>

      <HiOutlineChevronDown />
    </StyledUser>
  );
}

export default User;
