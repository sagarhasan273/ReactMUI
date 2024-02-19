/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Button, Stack } from "@mui/material";

const buttonDashboardStyle = {
  borderRadius: "5px",
  backgroundColor: "#F5F5F5",
  color: "black",
  fontWeight: "540",
  textTransform: "none",
  width: "150px",
  height: "40px",
  "&:hover": {
    backgroundColor: "#EFF4F6",
    color: "primary.main",
  },
  "&.active":{
    backgroundColor: "#EFF4F6",
    color: "primary.main",
  }
};

function DashboardButtons({ option = [], value, setValue }) {
  return (
    <Stack direction="row" gap={{xs:1,md:2}} sx={{ mt: 4 }} flexWrap="wrap">
      {option.map((val, index) => {
        return (
          <Button
            key={index}
            className={
              val.value===value
                ? "active"
                : ""
            }
            sx={buttonDashboardStyle}
            onClick={() => setValue(val?.value)}
            disableRipple={true}
          >
            {val?.label}
          </Button>
        );
      })}
    </Stack>
  );
}

export default DashboardButtons
;
