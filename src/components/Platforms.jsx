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

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
  }
`;

function Platforms() {
  return (
    <StyledPlatforms>
      {platforms.map((platform) => (
        <Platform platform={platform} key={platform.id} />
      ))}
    </StyledPlatforms>
  );
}

export default Platforms;
