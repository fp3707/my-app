import React from "react";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      style={{
        height: "60px", // 풋터 높이
        backgroundColor: "navy", // 배경 색상
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px", // 내부 여백
      }}
    >
      <Typography variant="body2" align="center">
        © 2025 sss, All rights reserved.
      </Typography>
    </Grid>
  );
};

export default Footer;
