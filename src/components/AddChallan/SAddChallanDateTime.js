import React from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";


const SDateInput = styled(DatePicker)(({ theme }) => ({
  "& .MuiInputBase-root": {
    background: 'inputHouse.main',
    borderRadius: "20px",
    height: '36px',
    padding: "0px 4px",
    border: 'none'
  },
  "& fieldset": {
    border: 'none',
  },
  "& input": {
    paddingTop: "8px",
    paddingBottom: "8px",
    fontWeight: "500",
    fontSize: 14,
  },
  "& .MuiIconButton-root": {
    height: 30,
    color: '#717273'
  },
  "&:has(.MuiInputBase-root.Mui-disabled)": {
    opacity: "0.5",
  },
}));

function SAddBillDateTime() {
  return (
    <DemoItem label="Date">
      <SDateInput
      slotProps={{
        field: { clearable: true },
        textField: { size: "small" },
      }}
        onChange={(newValue) => console.log(newValue)}
        format="DD MMMM, YYYY"
      />
    </DemoItem>
  )
}

export default SAddBillDateTime;
