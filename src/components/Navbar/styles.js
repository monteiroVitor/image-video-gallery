import styled from 'styled-components';

export const Nav = styled.nav`
  background: var(--clr-white);
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 800px) {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  .logo {
    font-size: 1.5rem;
    color: var(--clr-grey-3);
    height: 40px;
  }
  .logo:hover {
    color: var(--clr-primary-5);
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  @media screen and (min-width: 800px) {
    padding: 0;
    .nav-toggle {
      display: none;
    }
  }
`;

export const Links = styled.div`
  height: 0;
  overflow: hidden;
  transition: var(--transition);
  .links {
    a {
      color: var(--clr-grey-3);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      display: block;
      padding: 0.5rem 1rem;
      transition: var(--transition);
    }
    a:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-5);
      padding-left: 1.5rem;
    }
    .current {
      color: var(--clr-primary-5);
    }
  }
  @media screen and (min-width: 800px) {
    height: auto !important;
    .links {
      display: flex;

      a {
        padding: 0;
        margin: 0 0.5rem;
      }

      a:hover {
        padding: 0;
        background: transparent;
      }
    }
  }
`;
