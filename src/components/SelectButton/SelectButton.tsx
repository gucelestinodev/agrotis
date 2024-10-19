import React from 'react';
import { ButtonStyle, IconContainer, ClearIcon, CnpjText } from './SelectButtonStyles';
import arrowDown from '../../assets/arrow-down.png';
import closeIcon from '../../assets/close.png';

interface SelectButtonProps {
  label: string;
  value: string | null;
  cnpj?: string | null;
  onSelectClick: () => void;
  onClearSelection: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ label, value, cnpj, onSelectClick, onClearSelection }) => {
  return (
    <div>
      <ButtonStyle onClick={onSelectClick} className={value ? 'selected' : ''}> {/* Adicionando a classe 'selected' */}
        {value ? (
          <>
            {value}
            <IconContainer>
              <ClearIcon
                src={closeIcon}
                alt="Fechar"
                onClick={(e) => {
                  e.stopPropagation();
                  onClearSelection();
                }}
              />
              <img src={arrowDown} alt="Seta para baixo" style={{ width: '12px' }} />
            </IconContainer>
          </>
        ) : (
          <>
            {label}
            <img src={arrowDown} alt="Seta para baixo" style={{ width: '12px' }} />
          </>
        )}
      </ButtonStyle>
      {cnpj && <CnpjText>CNPJ: {cnpj}</CnpjText>}
    </div>
  );
};

export default SelectButton;
