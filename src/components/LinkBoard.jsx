import {
  HiOutlineBanknotes,
  HiOutlineBuildingLibrary,
  HiOutlinePaperClip,
} from "react-icons/hi2";
import styled from "styled-components";
import Button from "./Button";

const StyledLinkBoard = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  background-color: var(--color-grey-200);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  position: relative;

  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, auto);
    gap: 1.5rem;
  }

  .pointer {
    position: absolute;
    top: 50%;
    left: -8px;
    transform: translateY(-50%);
    border-bottom: var(--arrow-size) solid transparent;
    border-right: var(--arrow-size) solid var(--color-grey-200);
    border-top: var(--arrow-size) solid transparent;
  }

  .custom {
    padding-bottom: 0.2rem;
    border-bottom: 1.5px solid var(--color-yellow);
  }

  .indent_left {
    margin-left: 2rem;
  }
`;

const StyledBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const Icon = styled.p`
  font-size: 2rem;
`;

const LinkGroup = styled.ul`
  display: grid;
  gap: 0.3rem;
  color: var(--color-grey-600);

  & li {
    width: max-content;
    display: inline-block;
    transition: all var(--general-timing) linear;

    &:hover {
      cursor: pointer;
      color: var(--color-grey-800);
    }
  }
`;

function LinkBoard({ link }) {
  function getColor(social) {
    if (social.social === "Github") return "var(--color-purple)";
    if (social.social === "Twitter/X") return "var(--color-grey-900)";
    if (social.social === "LinkedIn") return "var(--color-blue)";
    if (social.social === "Instagram") return "var(--color-red)";
    if (social.social === "Whatsapp") return "var(--color-primary)";
  }
  return (
    <StyledLinkBoard>
      <StyledBox>
        <Icon>
          <HiOutlineBanknotes />
        </Icon>
        <LinkGroup>
          <li className="custom">{link.type}</li>
          <li>{link.function}</li>
          <li>{link.bank}</li>
        </LinkGroup>
      </StyledBox>
      <StyledBox>
        <Icon>
          <HiOutlineBuildingLibrary />
        </Icon>
        <div>
          <LinkGroup>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.geegpay.africa/"
            >
              <Button
                x={0.8}
                y={0.2}
                size={1.2}
                color="var(--color-grey-100)"
                bgcolor={"var(--color-secondary)"}
              >
                {link.host}
              </Button>
            </a>
            <li>Stacks</li>
            <LinkGroup className="indent_left">
              {link.stacks.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))}
            </LinkGroup>
          </LinkGroup>
          <div>{link.difficLinkGroupty}</div>
        </div>
      </StyledBox>
      <StyledBox>
        <Icon>
          <HiOutlinePaperClip />
        </Icon>
        <LinkGroup>
          {link.socials.map((social, index) => (
            <li key={index}>
              <a target="_blank" rel="noreferrer" href={social.link}>
                <Button
                  x={0.8}
                  y={0.2}
                  size={1.2}
                  color={"var(--color-white)"}
                  bgcolor={() => getColor(social)}
                >
                  {social.social}
                </Button>
              </a>
            </li>
          ))}
        </LinkGroup>
      </StyledBox>
      <div className="pointer"></div>
    </StyledLinkBoard>
  );
}

export default LinkBoard;
