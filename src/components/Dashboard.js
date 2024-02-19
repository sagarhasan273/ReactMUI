/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Accounts from "./common/accounts";
import DashboardButtons from "./Dashboard/DashboardButton";
import DashboardFilter from "./Dashboard/DashboardFilter";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DashboardTable from "./Dashboard/DashboardTable";

const changeAbleButtonText = [
  {
    label: "Challan",
    value: "Challan",
  },
  {
    label: "Bill",
    value: "Bill",
  },
  {
    label: "Quotation",
    value: "Quotation",
  },
  {
    label: "Transaction",
    value: "Transaction",
  },
];

function Dashboard() {
  const [value, setValue] = useState("Challan");

  return (
    <Box>
      <Stack spacing={2} sx={{ m: 4 }}>
        <Accounts />
        <DashboardButtons
          option={changeAbleButtonText}
          value={value}
          setValue={setValue}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DashboardFilter />
        </LocalizationProvider>
        <DashboardTable />
      </Stack>
    </Box>
  );
}

export default Dashboard;
