import React from 'react';
import { TextField } from '@mui/material';
import { FetchProps } from '../types'

const DateInput: React.FC<FetchProps> = ({ label, info, register, required = false }) => {
  return (
    <TextField
      label={label}
      type="date"
      fullWidth
      variant="standard"
      margin="normal"
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
          shrink: true,
        },
      }}
    />
  );
};

export default DateInput;
