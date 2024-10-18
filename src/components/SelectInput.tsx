import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface SelectInputProps {
  label: string;
  options: { id: number, nome: string }[];
  value: number | null;
  onChange: (event: SelectChangeEvent<number>) => void; // Ajuste aqui
}

const SelectInput: React.FC<SelectInputProps> = ({ label, options, value, onChange }) => {
  return (
    <FormControl fullWidth margin="normal" variant="standard">
      <InputLabel>{label}</InputLabel>
      <Select value={value || ''} onChange={onChange} required>
        {options.map(option => (
          <MenuItem key={option.id} value={option.id}>
            {option.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
