import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => `url('${props.image}')`};
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #464646;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  box-shadow: var(--light-shadow);
`;

export const Content = styled.div`
  .info a {
    color: var(--clr-white);
  }
`;
