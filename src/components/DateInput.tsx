import React from 'react';
import { TextField, Typography } from '@mui/material';
import { FetchProps } from '../types';

const DateInput: React.FC<FetchProps> = ({ label, info, register, required = false, errorMessage }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <TextField
        label={label}
        type="date"
        fullWidth
        variant="standard"
        margin="normal"
        required={required}
        {...register(info, { required: 'Data é obrigatória' })}
        slotProps={{
          input: {
            sx: {
              color: '#000000',
              '&:before': {
                borderBottomColor: errorMessage ? 'red' : '#006F59',
              },
              '&:after': {
                borderBottomColor: errorMessage ? 'red' : '#006F59',
              },
              '&:hover:not(.Mui-disabled):before': {
                borderBottomColor: errorMessage ? 'red' : '#006F59',
              },
            },
          },
          inputLabel: {
            sx: {
              color: errorMessage ? 'red' : '#000000',
              '&.Mui-focused': {
                color: errorMessage ? 'red' : '#006F59',
              },
            },
            shrink: true,
          },
        }}
      />
      {errorMessage && (
        <Typography variant="body2" color="error">
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default DateInput;
