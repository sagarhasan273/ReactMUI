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

import "react-toastify/dist/ReactToastify.css";
import AXIOS from "../../network/axios";

const inputDrawerStyle = {
  "& .MuiInputBase-input": { height: "15px" },
};

export default function CustomerDrawer({
  state,
  setState,
  setUsers,
  toast,
  refetch,
}) {
  const [formData, setFormData] = React.useState({
    key: "56c4a7ca54b76bd22d6fa47aba65358e",
    image: "",
  });
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [vatNo, setVatNo] = useState("");
  const [phone, setPhone] = useState("");

  const handleImageUpload = async () => {
    const fData = new FormData();
    fData.append("key", "56c4a7ca54b76bd22d6fa47aba65358e");
    fData.append("image", formData.image[0]);

    try {
      const response = await axios
        .post("https://api.imgbb.com/1/upload", fData)
        .then((response) => {
          return response;
        });
      if (response.status === 200 && response.data.success) {
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Failed to upload image. Please try again later.");
      }

      const userData = {
        name: name,
        address: address,
        email: email,
        vatNo: vatNo,
        phone: phone,
        image: response.data.data.display_url,
      };

      await AXIOS.post(`/user`, userData)
        .then((response) => {
          toast.success("Data posted successfully !");
          setState(false);
          refetch();
          return response;
        })
        .catch((error) => {
          console.error("Error data uploading:", error);
          toast.error("Failed to post data. Please try again later.");
        });
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image!");
    }
  };

  const toggleDrawer = (open) => (event) => {
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
        txt="Address"
        sx={{ ...inputDrawerStyle }}
        ast="*"
        value={address}
        setChange={setAddress}
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
        txt="VAT No"
        sx={{ ...inputDrawerStyle }}
        here="here"
        value={vatNo}
        setChange={setVatNo}
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
