import React from "react";
import { Stack, } from "@mui/material";
import InfoPaper from "./InfoPaper";


function InfoCard({ data=[['', ''],['', ''],['', ''],['', '']] }) {
  return (
    <Stack gap={2} direction={{md: 'column', lg:'row'}}>
      <Stack gap={2} flex={1} direction={{sm: 'column', md:'row'}}>
        <InfoPaper title={data[0][0]} text={data[0][1]} sx={{}}/>
        <InfoPaper title={data[1][0]} text={data[1][1]} sx={{}}/>
      </Stack>
      <Stack gap={2} flex={1} direction={{sm: 'column', md:'row'}}>
        <InfoPaper title={data[2][0]} text={data[2][1]}sx={{}}/>
        <InfoPaper title={data[3][0]} text={data[3][1]} sx={{}}/>
      </Stack>
    </Stack>
  );
}

export default InfoCard;
