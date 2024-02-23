import { Box } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import AXIOS from "../network/axios";
import { admin_Url } from "../network/api";
import AdminList from "./Admin/AdminList";

function Admin() {
  const fetchData = async () => {
    const response = await AXIOS.get(admin_Url);
    return response.data;
  };
  const admins = useQuery("admins", fetchData);
  return (
    <Box sx={{ p: 3 }}>
      <AdminList admins={admins} />
    </Box>
  );
}

export default Admin;
