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
        inputLabel: {
          shrink: true,
        },
      }}
    />
  );
};

export default DateInput;
