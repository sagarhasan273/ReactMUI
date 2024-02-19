import React from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const DemoPaper = styled(Paper)((props) => ({
  height: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: props.theme.spacing(2),
  flex: 1,
  ...props.theme.typography.body2,
  textAlign: "center",
  ...(props.sx || {}),
}));

function accountsPaper({ title, amount, sx }) {
    
  return (
    <DemoPaper variant="outlined" sx={sx}>
      <Typography variant="body1" color="initial">
        {title}
      </Typography>
      <Typography variant="body1" color="initial">
        {amount}
      </Typography>
    </DemoPaper>
  );
}

export default accountsPaper;
