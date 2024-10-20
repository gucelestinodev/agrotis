import React from 'react';
import { TextField, Typography } from '@mui/material';
import { FetchProps } from '../types';

const TextInput: React.FC<FetchProps> = ({ label, register, required = false, info, errorMessage }) => {
  return (
    <div>
      <TextField
        fullWidth
        label={label}
        required={required}
        variant="standard"
        margin="normal"
        {...register(info, { required: 'Nome é obrigatório' })}
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
              color: errorMessage ? 'red' : '#666666',
              '&.Mui-focused': {
                color: errorMessage ? 'red' : '#006F59',
              },
            },
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

export default TextInput;
