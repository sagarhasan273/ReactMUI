import {
  Box,
} from "@mui/material";
import React from "react";
import CustomerFilter from "./Customer/CustomerFilter";


function Customer() {
  return (
    <Box sx={{ p: 2 }}>
      <CustomerFilter />
    </Box>
  );
}

export default Customer;
