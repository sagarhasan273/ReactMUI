import React from 'react'
import { Typography, InputBase, Stack } from "@mui/material";
function Input({ txt, name, value, setChange, sx, ph }) {
  return (
    <Stack>
      <Typography>{txt}</Typography>
      <InputBase
        sx={{ flex: 1, p: .4, pl: 1.5, borderRadius: '20px', ...sx }}
        placeholder={(!ph) ? `` : ph}
        inputProps={{ "aria-label": `${txt}` }}
        name={name}
        value={value}
        onChange={setChange}
      />
    </Stack>
  )
}

export default Input;
