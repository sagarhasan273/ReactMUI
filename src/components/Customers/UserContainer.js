import { Box, Button, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteUserAdmin } from "../common/deleteUserAdmin";
import { user_Url } from "../../network/api";
import { useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: 78,
  display: "flex",
  alignItems: "center",
  padding: "5px",
  paddingLeft: "10px",
  gap: 12,
  width: "300px",
  borderRadius: "12px",
  "&:hover": {
    cursor: "pointer",
  },
}));

const moveLeftRight = {
  position: "absolute",
  animation: "moveLeftToRight .5s forwards",
  "@keyframes moveLeftToRight": {
    "0%": {
      right: "35px",
    },
    "100%": {
      right: "0px",
    },
  },
};

function UserContainer({ users = [], setBreadcrumbs, setId }) {
  const [hover, setHover] = useState("");
  const queryClient = useQueryClient();

  const handleClickUserCard = (e, user) => {
    e.preventDefault();
    setId(user?._id);
    setBreadcrumbs({
      customerList: false,
      customer: true,
    });
    const url = new URL(window.location.href);
    url.searchParams.set("_id", `${user?._id}`);
    window.history.pushState({}, "", url);
  };

  const mouseEnterHandle = (e) => {
    setHover(e.target.id);
  };
  const mouseLeaveHandle = () => {
    setHover("");
  };

  return (
    <Box
      sx={{
        mt: 3,
        borderRadius: 2,
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <ToastContainer position="top-center" autoClose={1000} />
      {users.map((user, index) => (
        <Stack
          key={index}
          sx={{ position: "relative", width: "fit-content" }}
          onMouseEnter={mouseEnterHandle}
          onMouseLeave={mouseLeaveHandle}
        >
          <Item
            id={user._id}
            elevation={6}
            onClick={(e) => handleClickUserCard(e, user)}
          >
            <Avatar
              alt="User Profile"
              src={user?.image}
              sx={{ width: 64, height: 64 }}
            />
            <Stack>
              <Typography color="primary.main">{user?.name}</Typography>
              <Typography sx={{ fontSize: "12px" }}>{user?.email}</Typography>
              <Typography sx={{ fontSize: "12px" }}>{user?.phone}</Typography>
            </Stack>
          </Item>
          {hover === user._id ? (
            <Stack sx={moveLeftRight}>
              <Button>
                <EditIcon />
              </Button>
              <Button
                onClick={() => DeleteUserAdmin(user_Url, user._id, queryClient, toast, 'users')}
              >
                <DeleteIcon />
              </Button>
            </Stack>
          ) : null}
        </Stack>
      ))}
    </Box>
  );
}

export default UserContainer;
