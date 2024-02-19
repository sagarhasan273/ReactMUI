/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NoteIcon from "@mui/icons-material/Note";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import AXIOS from "../../network/axios";
import getAllCookiesAsObject from "../../helper/cookie/getCookiesAsObject";
import { API_Url } from "../../network/api";
import { camelize } from "./camelize";

function Navbar() {
  const [menuState, setMenuState] = React.useState(false);
  const { user, setUser } = useGlobalContext();
  const id = getAllCookiesAsObject("_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      AXIOS.get(`${API_Url}/login/${id}`)
        .then((res) => {
          console.log(res.data.user);
          setUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuState((prev) => !prev);
  };

  const icons = {
    Dashboard: () => {
      return <DashboardIcon />;
    },
    "Add Bill": () => {
      return <AttachMoneyIcon />;
    },
    "Add Challan": () => {
      return <ArticleIcon />;
    },
    Quotation: () => {
      return <NoteIcon />;
    },
    Customer: () => {
      return <SupportAgentIcon />;
    },
    Admin: () => {
      return <AdminPanelSettingsIcon />;
    },
  };

  

  const list = (anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Dashboard",
          "Add Bill",
          "Add Challan",
          "Quotation",
          "Customer",
          "Admin",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&.MuiButtonBase-root": {
                  "&:hover": {
                    backgroundColor: "#636363",
                    color: "white",
                  },
                },
              }}
              onClick={() => navigate(`/${camelize(text)}`, { replace: true })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                {icons[text]()}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ m: 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        height: "20px",
        boxShadow: "1px 2px 10px #888888",
      }}
    >
      <IconButton
        aria-controls="simple-menu"
        onClick={toggleDrawer(true)}
        color="primary"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={menuState} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={`${user?.name}`}
          src={`${user.image}`}
          sx={{ width: "38px", height: "38px" }}
        />
        <Typography color="primary">
          <strong>{user.name}</strong>
        </Typography>
        <LogoutIcon sx={{ cursor: "pointer", fontSize: "18px" }} />
        {(user?.email) ? <Typography
          to="/login"
          style={{
            textDecoration: "none",
            fontSize: "14px",
            cursor: "pointer",
          }}
          color="primary"
        >
          LogOut
        </Typography> : <Typography
          to="/login"
          style={{
            textDecoration: "none",
            fontSize: "14px",
            cursor: "pointer",
          }}
          color="primary"
        >
          Sign In
        </Typography>}
      </Box>
    </Box>
  );
}

export default Navbar;
