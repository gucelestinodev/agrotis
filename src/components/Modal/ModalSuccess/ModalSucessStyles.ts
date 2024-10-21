import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  bottom: 0; /* Posiciona o modal na parte inferior */
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end; 
  padding-bottom: 20px;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: green;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: ${slideUp} 0.5s ease;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const SuccessMessage = styled.div`
  flex-grow: 1;
  font-size: 1rem;
  color: #ffffff;
  margin-left: 10px;
`;

export const Icon = styled.img`
`;