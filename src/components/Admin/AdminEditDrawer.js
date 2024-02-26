import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Input from "../common/Input";
import ImageUpload from "../common/ImageUpload";
import axios from "axios";
import AXIOS from "../../network/axios";
import { useQuery, useQueryClient } from "react-query";
import { admin_Url } from "../../network/api";

const inputDrawerStyle = {
  "& .MuiInputBase-input": { height: "15px", borderRadius: "15px", pl: 1.5 },
  borderRadius: "20px",
};

export default function AdminDrawer({
  state,
  setState,
  id,
  setId,
  toasterHandle,
}) {
  const [formData, setFormData] = React.useState({
    key: "56c4a7ca54b76bd22d6fa47aba65358e",
    image: "",
  });
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const queryClient = useQueryClient();
  const fetchData = async () => {
    const response = await AXIOS.get(`${admin_Url}/${id}`);
    return response.data;
  };
  useQuery(["userData", id], fetchData, {
    onSuccess: (data) => {
      if (data?.status) {
        setName(data?.user?.name || "");
        setEmail(data?.user?.email || "");
        setPassword("");
        setPhone(data?.user?.phone || "");
        setImage(data?.user?.image || "");
      }
    },
  });

  const handleImageUpload = async () => {
    const fData = new FormData();
    fData.append("key", "56c4a7ca54b76bd22d6fa47aba65358e");
    fData.append("image", formData.image[0] || image);

    try {
      let response = null
      if (image !== '') {
        response = await axios
          .post("https://api.imgbb.com/1/upload", fData)
          .then((response) => {
            return response;
          });
        if (response.status === 200 && response.data.success) {
          toasterHandle.success("Image uploaded successfully!");
        } else {
          toasterHandle.error("Failed to upload image. Please try again later.");
        }
      }

      const adminData = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        image: response.data.data.display_url || image,
      };

      await AXIOS.put(`${admin_Url}/${id}`, adminData)
        .then((response) => {
          toasterHandle.success("Data posted successfully !");
          setId("");
          setName("");
          setEmail("");
          setPassword("");
          setPhone("");
          setImage('')
          setState(false);
          queryClient.invalidateQueries("admins");
          return response;
        })
        .catch((error) => {
          console.error("Error data uploading:", error);
          toasterHandle(
            "error",
            "Failed to post data. Please try again later."
          );
        });
    } catch (error) {
      console.error("Error uploading image:", error);
      toasterHandle("error", "Error uploading image!");
    }
  };

  const toggleDrawer = (open) => (event) => {
    setId("");
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setState(false);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <Stack sx={{ width: 230, p: 3, gap: "20px" }} role="presentation">
      <Stack
        sx={{
          height: "30px",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Add User</Typography>
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setState(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      <Input
        txt="Name"
        sx={{ ...inputDrawerStyle }}
        ast="*"
        value={name}
        setChange={setName}
      />
      <Input
        txt="Phone"
        sx={{ ...inputDrawerStyle }}
        ast="*"
        value={phone}
        setChange={setPhone}
      />
      <Input
        txt="Email"
        sx={{ ...inputDrawerStyle }}
        ast="*"
        value={email}
        setChange={setEmail}
      />
      <Input
        txt="Password"
        sx={{ ...inputDrawerStyle }}
        value={password}
        type="password"
        setChange={setPassword}
      />
      <ImageUpload
        txt="Profile Photo"
        formData={formData}
        setFormData={setFormData}
      />
      <Button
        variant="contained"
        sx={{ width: "80px", gap: "4px", height: "32px" }}
        onClick={handleImageUpload}
      >
        <AddIcon /> <Typography sx={{ fontSize: "14px" }}>ADD</Typography>
      </Button>
    </Stack>
  );

  return (
    <React.Fragment key={"right"}>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
}
