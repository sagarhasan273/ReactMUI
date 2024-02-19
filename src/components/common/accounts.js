import React from "react";
import { Stack, } from "@mui/material";
import AccountsPaper from "./accountsPaper";


function accounts() {
  return (
    <Stack gap={2} direction={{md: 'column', lg:'row'}}>
      <Stack gap={2} flex={1} direction={{sm: 'column', md:'row'}}>
        <AccountsPaper title="Total Paid" amount={97944.40} sx={{}}/>
        <AccountsPaper title="DUE" amount={174400.00} sx={{}}/>
      </Stack>
      <Stack gap={2} flex={1} direction={{sm: 'column', md:'row'}}>
        <AccountsPaper title="CHALLAN" amount={12} sx={{}}/>
        <AccountsPaper title="BILL" amount={8} sx={{}}/>
      </Stack>
    </Stack>
  );
}

export default accounts;
