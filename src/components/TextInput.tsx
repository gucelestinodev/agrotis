import React from 'react';
import { TextField } from '@mui/material';
import { FetchProps } from '../types'

const TextInput: React.FC<FetchProps> = ({ label, register, required = false, info }) => {
  return (
    <TextField
      fullWidth
      label={label}
      required={required}
      variant="standard"
      margin="normal"
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

export default TextInput;
