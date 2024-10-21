import React from 'react';
import {
    ModalOverlay,
    ModalContainer,
    IconWrapper,
    SuccessMessage,
    Icon
} from './ModalSucessStyles';
import closeIcon from '../../../assets/closeWhite.png';
import checkIcon from '../../../assets/check.png';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <IconWrapper>
                    <Icon
                        src={checkIcon}
                        alt="Fechar"
                    />
                </IconWrapper>
                <SuccessMessage>
                    Cadastro realizado com sucesso!
                </SuccessMessage>
                <Icon
                    src={closeIcon}
                    alt="Fechar"
                    onClick={onClose}
                />
            </ModalContainer>
        </ModalOverlay>
    );
};

export default Modal;
