import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import Input from "./common/addChallanInputs";
import SAddChallanDateTime from "./AddChallan/SAddChallanDateTime";
import AddChallanSearchInput from "./AddChallan/AddChallanSearchInput";
import AddChallanDrawer from "./AddChallan/AddChallanDrawer";
import SaveIcon from "@mui/icons-material/Save";

function AddChallan() {
  const [createChallan, setCreateChallan] = React.useState(false);

  const ButtonHandle = () => {
    console.log("hello world");
  };

  return (
    <Box sx={{ p: 3, pt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack>Create Challan</Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack sx={{ alignItems: "end" }}>
            <Button
              size="small"
              sx={{
                width: "240px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              variant="contained"
              color="primary"
              onClick={() => setCreateChallan(true)}
              fullWidth
            >
              <AddIcon />
              <Typography sx={{ fontSize: "14px" }}>Create New Challan</Typography>
            </Button>
            <AddChallanDrawer state={createChallan} setState={setCreateChallan} />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <DemoItem label="Name">
            <AddChallanSearchInput />
          </DemoItem>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SAddChallanDateTime />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <DemoItem label="Address">
            <Input ph={""} />
          </DemoItem>
        </Grid>
      </Grid>
      <button
          style={{
            width: "922px",
            height: "35px",
            gap: "5px",
            border: "none",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            padding: "0px",
            margin: '8px',
            marginBottom: '15px',
            cursor: 'pointer'
          }}
          onClick={ButtonHandle}
        >
          <AddIcon sx={{ fontSize: "18px", color: "primary.main" }} />
          <Typography
            sx={{
              fontSize: "16px",
              textTransform: "none",
              color: "primary.main",
            }}
          >
            Add Challan
          </Typography>
        </button>
        <Button
          size="small"
          sx={{
            width: "100px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            marginTop: '5px'
          }}
          variant="contained"
          color="primary"
          fullWidth
        >
          <SaveIcon />
          <Typography sx={{ fontSize: "14px" }}>Save</Typography>
        </Button>
    </Box>
  );
}

export default AddChallan;
