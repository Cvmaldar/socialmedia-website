import React,{useState} from 'react';

import SideBar from "./Components/SideBar"

import Feed from "./Components/Feed"
import RightBar from "./Components/RightBar";

import './App.css';
import { Box, ThemeProvider } from '@mui/material';
import { Stack } from '@mui/system';
import NavBar from './Components/NavBar';
import Add from './Components/Add';
import { createTheme } from '@mui/material';

function App() {
  const [mode, setMode] = useState("dark");

const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <ThemeProvider theme={darkTheme}>
   <Box  bgcolor={"background.default"} color={"text.primary"}>
   <NavBar />
   <Stack direction="row" spacing={2} justifyContent="space-between">
    <SideBar setMode={setMode} mode={mode}/>
    <Feed />
    <RightBar />
    </Stack>
    <Add />
   </Box>
   </ThemeProvider>
   
  );
}

export default App;
