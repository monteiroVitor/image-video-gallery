import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin: 200px auto;
  @media screen and (min-width: 576px) {
    max-width: var(--fixed-width);
  }
`;
export const Button = styled.button`
  padding: 0.75rem 1.25rem;
  border: none;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  font-size: 1.5rem;
  background: var(--clr-white);
  color: var(--clr-grey-5);
  border-radius: 0 0.6rem 0.6rem 0;
`;
export const Input = styled.input`
  width: var(--max-width);
  color: var(--clr-grey-3);
  padding: 0.75rem 1.25rem;
  border: none;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  font-size: 1.25rem;
  background: var(--clr-white);
  color: var(--clr-grey-5);
  border-radius: 0.6rem 0 0 0.6rem;
  :focus {
    outline: none;
  }
  :placeholder {
    color: var(--clr-grey-5);
  }
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
