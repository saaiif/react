import { Box, useTheme } from "@mui/material";
import React from "react";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

function GeoGraphy() {
  const theme = useTheme();
  const colors = tokens(theme.palette.colors);
  return (
    <Box m='20px'>
      <Header title='GeoGraphy Chart' subtitle='Simple GeoGraphy Chart' />
      <Box height='75vh' borderRadius="4px" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default GeoGraphy;
