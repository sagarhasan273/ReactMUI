import * as React from "react";
import Drawer from "@mui/material/Drawer";
import TestQuotationDrawer from "./testQuotationDrawer";

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


  return (
    <React.Fragment key={"right"}>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <TestQuotationDrawer setState={setState} />
      </Drawer>
    </React.Fragment>
  );
}
