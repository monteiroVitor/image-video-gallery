import styled from 'styled-components';

export const Info = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  transform: translateY(100%);
  transition: var(--transition);
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #fff;
  }
  .icon {
    margin-left: 0.4rem;
  }
`;

export const Wrapper = styled.article`
  height: 17.5rem;
  position: relative;
  overflow: hidden;
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0;
  }
  img,
  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  &:hover ${Info} {
    transform: translateY(0);
  }
`;
