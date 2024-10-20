import React from 'react';
import { Modal, ModalContent, ModalTitle, ModalButton } from './ModalErrorStyles';

interface ErrorModalProps {
  onRetry: () => void;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ onRetry, onClose }) => {
  return (
    <Modal>
      <ModalContent>
        <ModalTitle>Erro ao Carregar Dados</ModalTitle>
        <p>Ocorreu um erro ao carregar os dados. Deseja tentar novamente?</p>
        <ModalButton onClick={onRetry}>Recarregar</ModalButton>
        <ModalButton onClick={onClose}>Fechar</ModalButton>
      </ModalContent>
    </Modal>
  );
};

export default ErrorModal;
