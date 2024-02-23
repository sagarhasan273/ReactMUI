import React, { useState } from "react";
import { Typography, InputBase, Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const visibleStyle = {
  ml: 1
}

function Input({ txt, name, value, setChange, sx, ph, ast, here, type }) {
  const [visible, setVisible] = useState(true);
  const handleVisibleIcon = () => {
    setVisible((prev) => !prev);
  };
  return (
    <Stack>
      <Typography>{`${txt} ${ast ? ast : ""}`}</Typography>
      <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
        <InputBase
          sx={{ flex: 1, p: 1, ...sx }}
          placeholder={
            !ph ? `Enter your ${txt} ${ast ? "here" : here ? here : ""}` : ph
          }
          inputProps={{ "aria-label": `Enter your ${txt}` }}
          name={name}
          type={(visible) ? type: ''}
          value={value}
          onChange={(e) => setChange(e.target.value)}
        />
        {type === "password" || type === "Password" ? (
          visible ? (
            <VisibilityIcon sx={visibleStyle} onClick={handleVisibleIcon} />
          ) : (
            <VisibilityOffIcon sx={visibleStyle} onClick={handleVisibleIcon} />
          )
        ) : null}
      </Stack>
    </Stack>
  );
}

export default Input;
