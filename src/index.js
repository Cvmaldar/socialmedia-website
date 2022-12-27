import React from 'react';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import './index.css';
import theme from "./theme";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <App  />
  </ThemeProvider>
    
  </React.StrictMode>
);



