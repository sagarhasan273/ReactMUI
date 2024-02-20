import {
  Box,
} from "@mui/material";
import React from "react";
import CustomerFilter from "./Customer/CustomerFilter";
import UserContainer from './Customer/UserContainer';
import { useQuery } from "react-query";
import AXIOS from "../network/axios";
import { user_Url } from "../network/api";

function Customer() {
  const fetchData = async () => {
    const response = await AXIOS.get(user_Url);
    return response.data;
  };
  const users = useQuery('users', fetchData);
  return (
    <Box sx={{ p: 3 }}>
      <CustomerFilter  />
      <UserContainer users={users?.data?.users} loading={users?.isLoading} />
    </Box>
  );
}

export default Customer;
