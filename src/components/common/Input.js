import React from 'react'
import { Typography, InputBase, Stack } from "@mui/material";
function Input({ txt, name, value, setChange, sx, ph, ast, here, type, hide }) {
  return (
    <Stack>
      <Typography>{`${txt} ${ast ? ast : ''}`}</Typography>
      <InputBase
        sx={{ flex: 1, p: 1, ...sx }}
        placeholder={(!ph) ? `Enter your ${txt} ${ast ? 'here' :  here ? here: ''}` : ph}
        inputProps={{ "aria-label": `Enter your ${txt}` }}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setChange(e.target.value)}
      />
    </Stack>
  )
}

export default Input;
