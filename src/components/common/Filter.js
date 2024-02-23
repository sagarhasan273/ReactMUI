import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CommonDateTime from "./CommonDateTime";
import SearchInputBase from "./SearchInputBase";
import { Button, Grid, Typography } from "@mui/material";
import AdminDrawer from "../Admin/AdminDrawer";
import CustomerDrawer from "../Customers/CustomerDrawer";
import Model from "./Model";

function Filter({ type, from }) {
  const [state, setState] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const handleOpen = () => {
    if (type === "add") {
      setState(true);
    }
    if (type === "payment") setModelOpen(true);
  };
  const handleClose = () => setModelOpen(false);

  return (
    <Grid container spacing={1}>
      
      <Grid item xs={12} md={5}>
        <SearchInputBase />
      </Grid>
      <Grid item xs={4.75} md={2.75}>
        <CommonDateTime />
      </Grid>
      <Grid item xs={4.75} md={2.75}>
        <CommonDateTime />
      </Grid>
      <Grid item xs={2.5} md={1.5}>
        <Button
          size="small"
          sx={{
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleOpen}
        >
          <AddIcon />
          <Typography sx={{ fontSize: "14px" }}>
            {type === "add" ? "ADD" : "Payment"}
          </Typography>
        </Button>

        {(from === 'admins') ? <AdminDrawer
          state={state}
          setState={setState}
        />: null}
        {(from === 'customers') ? <CustomerDrawer
          state={state}
          setState={setState}
        />: null}
        <Model open={modelOpen} onClose={handleClose} />
      </Grid>
    </Grid>
  );
}

export default Filter;
