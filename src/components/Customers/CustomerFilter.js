import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CustomerDateTime from "./CustomerDateTime";
import CustomerInputBase from "./CustomerInputBase";
import { Button, Grid, Typography } from "@mui/material";
import CustomerDrawer from "./CustomerDrawer";
import Model from "../common/Model";
import { ToastContainer, toast } from "react-toastify";

function CustomerFilter({ setUsers, type, refetch }) {
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
      <ToastContainer position="top-center" autoClose={2000} />
      <Grid item xs={12} md={5}>
        <CustomerInputBase />
      </Grid>
      <Grid item xs={4.75} md={2.75}>
        <CustomerDateTime />
      </Grid>
      <Grid item xs={4.75} md={2.75}>
        <CustomerDateTime />
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

        <CustomerDrawer
          state={state}
          setState={setState}
          setUsers={setUsers}
          toast={toast}
          refetch={refetch}
        />
        <Model open={modelOpen} onClose={handleClose} />
      </Grid>
    </Grid>
  );
}

export default CustomerFilter;
