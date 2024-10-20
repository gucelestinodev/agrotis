import React from 'react';
import { TextField } from '@mui/material';
import { FetchProps } from '../types'

const ObservacoesInput: React.FC<FetchProps> = ({ label = "Observações", register, info, required = false }) => {
  return (
    <TextField
      label={label}
      fullWidth
      multiline
      rows={4}
      margin="normal"
      variant="standard"
      required={required}
      {...register(info)}
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
