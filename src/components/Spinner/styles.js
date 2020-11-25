import styled from 'styled-components';
/* 
Creditos: IrlanFreitas
github: https://github.com/IrlanFreitas
versão original: https://github.com/IrlanFreitas/react-movieDB/tree/main/src/components/Spinner
*/
export const Spinner = styled.div`
  border: 5px solid var(--clr-black);
  border-top: 5px solid var(--clr-white);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
