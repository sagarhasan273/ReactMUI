import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddQuotationInput from "../common/addQuotationInputs";
import AddIcon from "@mui/icons-material/Add";
import IconButton from '@mui/material/IconButton';

export default function AddQuotationDrawer({ state, setState }) {
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
        <Typography>Add Quotation</Typography>
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
      <AddQuotationInput txt="Quantity" ph="0" />
      <AddQuotationInput
        txt="Description"
        sx={{
          "& .MuiInputBase-input": {
            height: "120px",
          },
        }}
      />
      <AddQuotationInput txt="Remark" />
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
