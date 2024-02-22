import { Box } from "@mui/material";
import React, { useState } from "react";
import CustomerList from "./Customers/CustomerList";
import CustomerInfo from "./Customers/CustomerInfo";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import AXIOS from "../network/axios";
import { user_Url } from "../network/api";

function Customers() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const _id = searchParams.get("_id") || "";
  const [breadcrumbs, setBreadcrumbs] = useState({
    customerList: _id === "" ? true : false,
    customer: _id !== "" ? true : false,
  });
  const [id, setId] = useState(_id);
  const fetchData = async () => {
    const response = await AXIOS.get(user_Url);
    return response.data;
  };
  const users = useQuery("users", fetchData);
  const { data, isLoading, isError, refetch } = users;
  console.log(data, isLoading, isError, refetch);

  const refetchHandle = () => {
    refetch();
  }

  return (
    <Box sx={{ p: 3 }}>
      {breadcrumbs.customerList ? (
        <CustomerList
          users={users}
          setId={setId}
          setBreadcrumbs={setBreadcrumbs}
          refetch={refetchHandle} 
        />
      ) : null}
      {breadcrumbs.customer ? (
        <CustomerInfo users={users} id={id} setBreadcrumbs={setBreadcrumbs} />
      ) : null}
    </Box>
  );
}

export default Customers;
