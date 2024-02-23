import { Avatar, Stack } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import DashboardButtons from "../Dashboard/DashboardButton";
import InfoCard from "../common/InfoCard";
import CommonTable from "../common/Table";
import { useLocation } from 'react-router-dom';
import Filter from "../common/Filter";

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

const columns = [
  { id: "customers", label: "Customers", minWidth: 150 },
  { id: "challan", label: "Challan No", minWidth: 100 },
  {
    id: "date",
    label: "Date",
    minWidth: 120,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "description",
    label: "Description",
    minWidth: 200,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(customers, challan, date, description) {
  const density = date / description;
  return { customers, challan, date, description, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

function CustomerInfo({ users = {}, id, setBreadcrumbs }) {
  const [value, setValue] = useState("Challan");
  const customerInfo = users?.data?.users.find((item) => item._id === id);
  const location = useLocation();

  const handleClick = () => {
    const urlWithoutParams = location.pathname; // Get the current path
    window.history.pushState({}, '', urlWithoutParams);
    setBreadcrumbs({
      customerList: true,
      customer: false,
    });
  };

  const customer = [
    ["ADDRESS", `${customerInfo?.address}`],
    ["PHONE", `${customerInfo?.phone}`],
    ["EMAIL", `${customerInfo?.email}`],
    ["VAT NO", `${customerInfo?.vatNo}`],
  ];
  const customerAccount = [
    ["TOTAL PAID", `15`],
    ["DUE", `45`],
    ["CHALLAN", `46`],
    ["BILL", `89`],
  ];

  return (
    <Stack gap={2}>
      <Stack>
        <Typography>Customer</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            onClick={handleClick}
            sx={{
              "&: hover": {
                color: "black",
                cursor: "pointer",
              },
            }}
          >
            Customer List
          </Link>
          <Typography color="text.primary">Customer</Typography>
        </Breadcrumbs>
      </Stack>
      <Stack sx={{ flexDirection: "row", gap: 1.5, alignItems: "center" }}>
        <Avatar
          alt="User Profile"
          src={customerInfo?.image}
          sx={{ width: 64, height: 64 }}
        />
        <Stack>
          <Typography color="black" sx={{ fontWeight: 600 }}>
            {customerInfo?.name}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            UID: {customerInfo?._id}
          </Typography>
        </Stack>
      </Stack>
      <InfoCard data={customer} />
      <InfoCard data={customerAccount} />
      <DashboardButtons
        option={changeAbleButtonText}
        value={value}
        setValue={setValue}
      />
      <Filter type="payment" />
      <CommonTable columns={columns} rows={rows} />
    </Stack>
  );
}

export default CustomerInfo;
