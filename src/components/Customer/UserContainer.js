import { Box, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: 78,
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  paddingLeft: '10px',
  gap: 12,
  width: "300px",
  borderRadius: '12px',
}));


function UserContainer({users=[]}) {
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
      {users.map((user, index) => (
        <Item key={index} elevation={6}>
          <Avatar
            alt="User Profile"
            src={user?.image}
            sx={{ width: 64, height: 64 }}
          />
          <Stack>
            <Typography color="primary.main">{user?.name}</Typography>
            <Typography sx={{fontSize: '12px'}}>{user?.email}</Typography>
            <Typography sx={{fontSize: '12px'}}>{user?.phone}</Typography>
          </Stack>
        </Item>
      ))}
    </Box>
  );
}

export default UserContainer;
