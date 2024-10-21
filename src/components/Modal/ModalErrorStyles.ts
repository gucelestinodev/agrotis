import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 10px;
`;

export const ModalButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #006F59;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #005947;
  }
`;
