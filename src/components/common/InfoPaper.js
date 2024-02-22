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

function InfoPaper({ title, text, sx }) {
    
  return (
    <DemoPaper variant="outlined" sx={sx}>
      <Typography variant="body1" color="initial">
        {title}
      </Typography>
      <Typography variant="body1" color="initial">
        {text}
      </Typography>
    </DemoPaper>
  );
}

export default InfoPaper;
