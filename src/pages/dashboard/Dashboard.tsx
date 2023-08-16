import * as React from "react";
import { Box, Grid, Paper } from "@mui/material";
import s from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <Box className={s.root}>
      <Grid container gap={2} className={s["top-cards-container"]}>
        <Grid>
          <Paper className={s["data-card"]}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={s["data-card"]}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={s["data-card"]}>xs=4</Paper>
        </Grid>
      </Grid>
      <Grid xs={12} marginY={2}>
        <Paper className={s["data-card"]}>xs=12</Paper>
      </Grid>
    </Box>
  );
};

export default Dashboard;
