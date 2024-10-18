import React from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, required = false }) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      required={required}
      variant="standard"
      margin="normal"
      slotProps={{
        input: {
          sx: {
            '&:before': {
              borderBottomColor: '#006F59',
            },
            '&:after': {
              borderBottomColor: '#006F59',
            },
          },
        },
      }}
    />
  );
};

export default TextInput;
