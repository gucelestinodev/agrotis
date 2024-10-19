import React from 'react';
import { TextField } from '@mui/material';

interface ObservacoesInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ObservacoesInput: React.FC<ObservacoesInputProps> = ({ value, onChange }) => {
  return (
    <TextField
      label="Observações"
      value={value}
      onChange={onChange}
      fullWidth
      multiline
      rows={4}
      margin="normal"
      variant="standard"
      slotProps={{
        input: {
          sx: {
            color: '#000000',
            '&:before': {
              borderBottomColor: '#006F59',
            },
            '&:after': {
              borderBottomColor: '#006F59',
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottomColor: '#006F59',
            },
          },
        },
        inputLabel: {
          sx: {
            '&.Mui-focused': {
              color: '#006F59',
            },
          },
        },
      }}
    />
  );
};

export default ObservacoesInput;
