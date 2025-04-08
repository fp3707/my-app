import React, { useState } from "react";
import { Button, Grid, Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      style={{
        height: "40px", // 헤더 높이를 40px로 줄임
        backgroundColor: "navy", // 헤더 배경색
        color: "white",
        alignItems: "center",
        padding: "0 20px", // 헤더 내부 여백
      }}
    >
      {/* 메뉴 버튼 및 제목 */}
      <Grid item style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          color="inherit"
          onClick={handleMenuOpen}
          style={{ marginRight: "10px" }}
        >
          <MenuIcon />
        </IconButton>
        <h1 style={{ margin: 0, fontSize: "18px" }}>Crypto</h1> {/* 제목의 글꼴 크기 조정 */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>About</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        </Menu>
      </Grid>

      {/* 로그인 및 회원가입 버튼 */}
      <Grid
        item
        style={{
          marginLeft: "auto", // 버튼을 오른쪽 끝으로 이동
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: "10px" }}
        >
          Login
        </Button>
        <Button variant="outlined" color="inherit">
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
