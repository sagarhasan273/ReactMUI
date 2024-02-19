import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddBillInput from "../common/addBillInputs";
import AddIcon from "@mui/icons-material/Add";
import IconButton from '@mui/material/IconButton';

export default function AddBillDrawer({ state, setState }) {
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
      <Stack sx={{ height: '30px', flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
        <Typography>Add Bill</Typography>
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
      <AddBillInput txt="Quantity" ph="0" />
      <AddBillInput
        txt="Description"
        sx={{
          "& .MuiInputBase-input": {
            height: "120px",
          },
        }}
      />
      <AddBillInput txt="Unit Price" ph="0" />
      <AddBillInput txt="Total Amount" />
      <Button
        variant="contained"
        sx={{ width: "80px", gap: "4px", height: "32px" }}
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
