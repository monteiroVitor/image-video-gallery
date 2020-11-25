import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
`;

export const Content = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
  }
`;
