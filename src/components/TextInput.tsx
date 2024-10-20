import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { FetchProps } from '../types';

const MAX_LENGTH = 40;

const TextInput: React.FC<FetchProps> = ({ label, register, required = false, info, errorMessage }) => {
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= MAX_LENGTH) {
      setCharCount(inputValue.length);
    }
  };

  return (
    <Box>
      <TextField
        fullWidth
        label={label}
        required={required}
        variant="standard"
        margin="normal"
        {...register(info, { required: 'Nome é obrigatório' })}
        onChange={handleInputChange}
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
          htmlInput: {
            maxLength: MAX_LENGTH,
          },
        }}
      />
      {errorMessage && (
        <Typography variant="body2" color="error">
          {errorMessage}
        </Typography>
      )}
      <Typography variant="caption" display="block" align="right" color="textSecondary">
        {`${charCount}/${MAX_LENGTH}`}
      </Typography>
    </Box>
  );
};

export default TextInput;
