import React from 'react';
import { ButtonStyle } from './SelectButtonStyles';

interface SelectButtonProps {
  label: string;
  value: string | null;
  onSelectClick: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ label, value, onSelectClick }) => {
  return (
    <ButtonStyle onClick={onSelectClick}>
      {value ? `${value}` : label}
    </ButtonStyle>
  );
};

export default SelectButton;
