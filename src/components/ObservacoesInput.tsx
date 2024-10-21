import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { FetchProps } from '../types'

const MAX_LENGTH = 1000;

const ObservacoesInput: React.FC<FetchProps> = ({ label = "Observações", register, info, required = false }) => {
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
        label={label}
        fullWidth
        multiline
        rows={4}
        margin="normal"
        variant="standard"
        required={required}
        {...register(info)}
        onChange={handleInputChange}
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
          htmlInput: {
            maxLength: MAX_LENGTH,
          },
        }}
      />
      <Typography variant="caption" display="block" align="right" color="textSecondary">
        {`${charCount}/${MAX_LENGTH}`}
      </Typography>
    </Box>
  );
};

export default ObservacoesInput;
