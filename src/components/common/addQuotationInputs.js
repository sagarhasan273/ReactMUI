import React from "react";
import { Typography, InputBase, Stack } from "@mui/material";
function Input({ txt, name, value, setChange, sx, ph, type, InputLabelProps }) {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: "1.75rem",
          
          m: 0.5,
        }}
        variant="h6"
      >
        {txt}
      </Typography>
      <InputBase
        sx={{ flex: 1, p: 0.4, pl: 1.5, borderRadius: "20px", ...sx }}
        placeholder={!ph ? `` : ph}
        inputProps={{ "aria-label": `${txt}` }}
        name={name}
        value={value}
        onChange={setChange}
        type={type}
        InputLabelProps={InputLabelProps}
      />
    </Stack>
  );
}

export default Input;
