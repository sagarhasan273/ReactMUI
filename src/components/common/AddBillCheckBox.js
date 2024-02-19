import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function AddBillCheckBox({ onChange, checked, label }) {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          sx={{ width: '35px', height: '30px' }}
        />
      }
      sx={{ '& .MuiTypography-root': {
        fontSize: '16px'
      }}}
    />
  );
}

export default AddBillCheckBox;
