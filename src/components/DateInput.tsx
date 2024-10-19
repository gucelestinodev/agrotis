import React from 'react';
import { TextField } from '@mui/material';

const DateInput: React.FC<{ label: string }> = ({ label }) => {
  return (
    <TextField
      label={label}
      type="date"
      fullWidth
      variant="standard"
      margin="normal"
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
        htmlInput: {
          sx: {
            label,
          }
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
