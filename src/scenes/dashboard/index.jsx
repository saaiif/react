import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

function Dashboard() {
  return (
    <Box m='20px'>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Header title='DASHBOARD' subtitle='Welcome to Dashboard' />
      </Box>
    </Box>
  );
}

export default Dashboard;
