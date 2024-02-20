import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CustomerDateTime from "./CustomerDateTime";
import CustomerInputBase from "./CustomerInputBase";
import { Button, Grid, Typography } from "@mui/material";
import CustomerDrawer from "./CustomerDrawer";

function CustomerFilter({ setUsers }) {
  const [state, setState] = useState(false);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={5}>
        <CustomerInputBase />
      </Grid>
      <Grid item xs={5} md={3}>
        <CustomerDateTime />
      </Grid>
      <Grid item xs={5} md={3}>
        <CustomerDateTime />
      </Grid>
      <Grid item xs={2} md={1}>
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
          onClick={() => setState(true)}
        >
          <AddIcon />
          <Typography sx={{ fontSize: "14px" }}>ADD</Typography>
        </Button>
        <CustomerDrawer state={state} setState={setState} setUsers={setUsers} />
      </Grid>
    </Grid>
  );
}

export default CustomerFilter;
