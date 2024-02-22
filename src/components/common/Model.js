import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Input from "./Input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export default function BasicModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={{pb: 2.5}}>Make Payment</Typography>
        <Stack gap={1}>
          <Input txt="Payment Amount" value={4500} sx={{'& .MuiInputBase-input':{height: '20px'}, mt:1}} />
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography>Total Due</Typography>
            <Typography>67560 Tk</Typography>
          </Stack>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography>Paid</Typography>
            <Typography>4500 Tk</Typography>
          </Stack>
          <Divider />
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography>Due</Typography>
            <Typography>63060 Tk</Typography>
          </Stack>
          <Stack sx={{ flexDirection: "row-reverse" }}>
            <Button variant="contained" sx={{ width: "50px", height: "30px" }}>
              Pay
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
