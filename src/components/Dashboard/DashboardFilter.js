import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DashboardFilterSearch from "./DashboardFilterSearch";
import DateTime from "../common/DateTime";
import Alert from "@mui/material/Alert";



export default function DashBoardFilter() {
    const [cleared, setCleared] = useState(false);
    useEffect(() => {
        if (cleared) {
          const timeout = setTimeout(() => {
            setCleared(false);
          }, 1500);
    
          return () => clearTimeout(timeout);
        }
        return () => {};
      }, [cleared]);
  return (
    <Box sx={{ flexGrow: 1 }}>
        
      {cleared && (
        <Alert
          sx={{ position: "absolute", top: 10, right: "48%" }}
          severity="success"
        >
          Field cleared!
        </Alert>
      )}
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <DashboardFilterSearch />
        </Grid>
        <Grid item md={3} xs={6}>
          <DateTime sx={{}} cleared={[cleared, setCleared]} />
        </Grid>
        <Grid item md={3} xs={6}>
          <DateTime sx={{}} cleared={[cleared, setCleared]} />
        </Grid>
      </Grid>
    </Box>
  );
}
