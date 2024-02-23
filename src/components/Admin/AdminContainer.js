import { Box, Button, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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

function AdminContainer({ admins = [] }) {
  const [hover, setHover] = useState('');

  const handleClickAdminCard = (admin) => {
    const url = new URL(window.location.href);
    url.searchParams.set("_id", `${admin?._id}`);
    window.history.pushState({}, "", url);
  };
  const mouseEnterHandle = (e) => {
    setHover(e.target.id);
  };
  const mouseLeaveHandle = () => {
    setHover('');
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
      {admins.map((admin, index) => (
        <Item
          key={index}
          elevation={6}
          id={admin._id}
          onClick={() => handleClickAdminCard(admin)}
          sx={{ position: "relative" }}
          onMouseEnter={mouseEnterHandle}
          onMouseLeave={mouseLeaveHandle}
        >
          <Avatar
            alt="admin Profile"
            src={admin?.image}
            sx={{ width: 64, height: 64 }}
          />
          <Stack>
            <Typography color="primary.main">{admin?.name}</Typography>
            <Typography sx={{ fontSize: "12px" }}>{admin?.email}</Typography>
            <Typography sx={{ fontSize: "12px" }}>{admin?.phone}</Typography>
          </Stack>
          {hover === admin._id ? (
            <Stack sx={moveLeftRight}>
              <Button>
                <EditIcon />
              </Button>
              <Button>
                <DeleteIcon />
              </Button>
            </Stack>
          ) : null}
        </Item>
      ))}
    </Box>
  );
}

export default AdminContainer;
