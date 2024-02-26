import { Box } from '@mui/system';
import React from 'react';
import { Button, Grid, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import Input from "./common/addQuotationInputs";
import SAddQuotationDateTime from "./AddQuotation/SAddQuotationDateTime";
import AddQuotationSearchInput from "./AddQuotation/AddQuotationSearchInput";
import AddQuotationDrawer from "./AddQuotation/AddQuotationDrawer";
import SaveIcon from "@mui/icons-material/Save";

function Quotation() {
  const [createQuotation, setCreateQuotation] = React.useState(false);

  const ButtonHandle = () => {
    console.log("hello world");
  };

  return (
    <Box sx={{ p: 3, pt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack>Create Quotation</Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack sx={{ alignItems: "end" }}>
            <Button
              size="small"
              sx={{
                width: "250px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              variant="contained"
              color="primary"
              onClick={() => setCreateQuotation(true)}
              fullWidth
            >
              <AddIcon />
              <Typography sx={{ fontSize: "14px" }}>Create New Quotation</Typography>
            </Button>
            <AddQuotationDrawer state={createQuotation} setState={setCreateQuotation} />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <DemoItem label="Name">
            <AddQuotationSearchInput />
          </DemoItem>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SAddQuotationDateTime />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <DemoItem label="Address">
            <Input ph={""} />
          </DemoItem>
        </Grid>
        <Grid item xs={12}>
          <DemoItem label="Notes (Optional)">
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
            Add Quotation
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
  )
}

export default Quotation
