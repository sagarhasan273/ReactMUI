import React from 'react'
import { Typography, InputBase, Stack } from "@mui/material";
function Input({ txt, name, value, setChange, sx, ph }) {
  return (
    <Stack>
      <Typography>{txt}</Typography>
      <InputBase
        sx={{ flex: 1, p: 1, ...sx }}
        placeholder={(!ph) ? `Enter your ${txt}` : ph}
        inputProps={{ "aria-label": `Enter your ${txt}` }}
        name={name}
        value={value}
        onChange={setChange}
      />
    </Stack>
  )
}

export default Input;
