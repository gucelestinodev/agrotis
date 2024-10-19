import styled from 'styled-components';

export const ButtonStyle = styled.button` 
  text-align: start;
  margin-bottom: 16px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  padding: 8px 0;
  cursor: pointer;
  font-size: 1rem;
  color: #666666;
  font-weight: 400;

  /* Estilos adicionais */
  &:hover {
    border-bottom: 2px solid #006F59;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #006F59;
`;
