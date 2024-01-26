import styled from "styled-components";
import { platforms } from "../data/platforms";
import Platform from "./Platform";

const StyledPlatforms = styled.div`
  grid-column: 2 / -1;

  display: grid;
  gap: 1.5rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  height: max-content;

  .heading-ph {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
  }

  .see-all {
    cursor: pointer;
    font-weight: 400;
    color: var(--color-primary);

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
  }
`;

function Platforms() {
  return (
    <StyledPlatforms>
      <div className="heading-ph">
        <span>Top Platforms</span>
        <span className="see-all">See All</span>
      </div>
      {platforms.map((platform) => (
        <Platform platform={platform} key={platform.id} />
      ))}
    </StyledPlatforms>
  );
}

export default Platforms;
