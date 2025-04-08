import React, { useRef, useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import Temp from "./Temp";

const Body = () => {
  const parentRef = useRef(null);
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (parentRef.current) {
      const { offsetWidth, offsetHeight } = parentRef.current;
      setParentSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []); // Runs once after the component mounts

  return (
    <Grid container spacing={2} ref={parentRef}>
      {/* 작은 사각형 그룹 (2x2) */}
      <Grid item xs={6} sm={3}>
        <Temp parentSize={parentSize} />
      </Grid>
      <Grid item xs={6} sm={3}>
          <Temp parentSize={parentSize} />
      </Grid>
      <Grid item xs={6} sm={3}>
          <Temp parentSize={parentSize} />
      </Grid>
      <Grid item xs={6} sm={3}>
          <Temp parentSize={parentSize} />
      </Grid>

      {/* 큰 박스 */}
      <Grid item xs={12} sm={6}>
        <Temp parentSize={parentSize} />

      </Grid>
    </Grid>
  );
};

export default Body;
