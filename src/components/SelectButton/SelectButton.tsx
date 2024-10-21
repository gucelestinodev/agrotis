import React from 'react';
import { ButtonStyle, IconContainer, Icon, CnpjText, ErrorMessage } from './SelectButtonStyles';
import arrowDown from '../../assets/arrow-down.png';
import closeIcon from '../../assets/close.png';
import warningIcon from '../../assets/warning.png';

interface SelectButtonProps {
  label: string;
  value: string | null;
  cnpj?: string | null;
  onSelectClick: () => void;
  onClearSelection: () => void;
  error?: boolean;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  label,
  value,
  cnpj,
  onSelectClick,
  onClearSelection,
  error,
}) => {
  return (
    <div>
      <ButtonStyle
        onClick={onSelectClick}
        className={`${value ? 'selected' : ''} 
        ${error ? 'error' : ''}`}
      >
        {value ? (
          <>
            {value}
            <IconContainer>
              <Icon
                src={closeIcon}
                alt="Fechar"
                onClick={(e) => {
                  e.stopPropagation();
                  onClearSelection();
                }}
              />
              <Icon src={arrowDown} alt="Seta para baixo" />
            </IconContainer>
          </>
        ) : (
          <>
            {label}
            <Icon src={arrowDown} alt="Seta para baixo" />
          </>
        )}
      </ButtonStyle>
      {cnpj && <CnpjText>CNPJ: {cnpj}</CnpjText>}
      {error &&
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img src={warningIcon} alt="Warning" />
          <ErrorMessage>Error</ErrorMessage>
        </div>
      }
    </div>
  );
};

export default SelectButton;
