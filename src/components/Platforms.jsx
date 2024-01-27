import styled from "styled-components";
import { platforms } from "../data/platforms";
import Platform from "./Platform";
import { useState } from "react";

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
    font-size: 1.8rem;
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
  const [showAll, setShowAll] = useState();

  const filteredPlatforms = platforms.slice(
    0,
    (showAll && platforms.length) || 4
  );

  return (
    <StyledPlatforms>
      <div className="heading-ph">
        <span>Top Platforms</span>
        <span className="see-all" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? "See Less" : "See All"}
        </span>
      </div>
      {filteredPlatforms.map((platform) => (
        <Platform platform={platform} key={platform.id} />
      ))}
    </StyledPlatforms>
  );
}

export default Platforms;
