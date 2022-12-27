
import React,{useState} from 'react';
import muiimg from "../images/muiimg.jpg"
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    
    MenuItem,
    Toolbar,
    Typography,
  } from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import styled from '@emotion/styled';




const StyledToolBar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(() => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius:"6px",
    width: "40%",
   lineHeight:"40px"
  }));
  
const Icons=styled(Box)(({theme})=>({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));
const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))
const NavBar = () => {
    const [open, setopen] = useState(false);
    return (
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Social-Media
          </Typography>
          <Pets sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="search..." color={"text.primary"}/>
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar sx={{ width: 30, height: 30 }} src={muiimg} onClick={e=>setopen(true)} />
          </Icons>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={muiimg} onClick={e=>setopen(true)}  />
            <Typography variant="span">Jhon</Typography>
          </UserBox>
        </StyledToolBar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e)=>setopen(false)} 
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    );
};

export default NavBar ;