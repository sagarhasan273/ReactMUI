import { Button, Grid, Typography } from "@mui/material";
import AddBillText from "./common/AddBillText";
import { Box, Stack } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import Input from "./common/addBillInputs";
import SAddBillDateTime from "./AddBill/SAddBillDateTime";
import SaveIcon from "@mui/icons-material/Save";
import AddBillCheckBox from "./common/AddBillCheckBox";
import AddBillSearchInput from "./AddBill/AddBillSearchInput";
import AddBillDrawer from "./AddBill/AddBillDrawer";

function AddBill() {
  const [checkedFull, setCheckedFull] = React.useState(false);
  const [checkedIndividual, setCheckedIndividual] = React.useState(false);
  const [createBill, setCreateBill] = React.useState(false);

  const handleChangeFull = (event) => {
    setCheckedFull((prev) => !prev);
    setCheckedIndividual(false);
  };

  const handleChangeIndividual = (event) => {
    setCheckedFull(false);
    setCheckedIndividual((prev) => !prev);
  };
  const ButtonHandle = () => {
    console.log("hello world");
  };

  return (
    <Box sx={{ p: 3, pt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack>Create Bill</Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack sx={{ alignItems: "end" }}>
            <Button
              size="small"
              sx={{
                width: "200px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              variant="contained"
              color="primary"
              onClick={() => setCreateBill(true)}
              fullWidth
            >
              <AddIcon />
              <Typography sx={{ fontSize: "14px" }}>Create New Bill</Typography>
            </Button>
            <AddBillDrawer state={createBill} setState={setCreateBill} />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <DemoItem label="Name">
            <AddBillSearchInput />
          </DemoItem>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SAddBillDateTime />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <DemoItem label="Address">
            <Input ph={""} />
          </DemoItem>
        </Grid>
        <Grid item xs={12}>
          <DemoItem label="Advance">
            <Input ph={"0"} />
          </DemoItem>
        </Grid>
        <Grid item xs={12}>
          <DemoItem label="Payment">
            <Input ph={"0"} />
          </DemoItem>
        </Grid>
      </Grid>
      <AddBillText text="Total Amount" sx={{ pt: 1.5 }} />
      <AddBillText text="0" />
      <AddBillText text="Taka (in words)" sx={{ pt: 1.5 }} />
      <AddBillText text="Zero Taka Only" sx={{ fontSize: "12px" }} />
      <AddBillText text="Advance" sx={{ pt: 1.5 }} />
      <AddBillText text="0" />
      <AddBillText text="Due" sx={{ pt: 1.5 }} />
      <AddBillText text="0" sx={{ pb: 1.5 }} />
      <Stack sx={{ gap: "15px" }}>
        <Stack>
          <AddBillCheckBox
            checked={checkedFull}
            onChange={handleChangeFull}
            label="Full Paid"
          />
          <AddBillCheckBox
            checked={checkedIndividual}
            onChange={handleChangeIndividual}
            label="Individual"
          />
        </Stack>
        <button
          style={{
            width: "82px",
            height: "35px",
            gap: "5px",
            border: "none",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            padding: "0px",
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
            Add Bill
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
          }}
          variant="contained"
          color="primary"
          fullWidth
        >
          <SaveIcon />
          <Typography sx={{ fontSize: "14px" }}>Save</Typography>
        </Button>
      </Stack>
    </Box>
  );
}

export default AddBill;
