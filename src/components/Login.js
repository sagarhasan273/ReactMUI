/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Input from "./common/Input";
import { useMutation } from "react-query";
import AXIOS from "../network/axios";
import { login_Url } from "../network/api";
import setCookiesAsObject from "../helper/cookie/setCookiesAsObject";
import { Circles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    password: "123456",
  });
  const [userValid, setUserValid] = useState(false);
  const navigate = useNavigate();

  const { mutate } = useMutation(
    (formData) => {
      return AXIOS.get(login_Url, { params: formData });
    },
    {
      onSuccess: (data) => {
        setCookiesAsObject("accessToken", data?.data?.user?.accessToken, 1);
        setCookiesAsObject("_id", data?.data?.user?._id, 1);
        if (data?.data?.status) navigate("/", { replace: true });
        setUserValid(false);
      },
      onError: (err) => console.log(err),
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
    setUserValid(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!userValid)
    return (
      <Container
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "600px",
            gap: "10px",
            "& .MuiTextField-root": {
              marginBottom: "16px",
            },
          }}
        >
          <Typography variant="h5" component="h3" sx={{ pb: "10px" }}>
            Log In
          </Typography>

          <Input
            txt="Email"
            name="email"
            value={formData.email}
            setChange={handleChange}
          />
          <Input
            txt="Password"
            name="password"
            value={formData.password}
            setChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Log In
          </Button>
        </Box>
      </Container>
    );
  else {
    return <Stack sx={{width: '100%', height: '500px', alignItems: 'center', justifyContent: 'center'}}>
      <Circles
        height="80"
        width="80"
        color="text.main"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Stack>;
  }
};

export default Login;
