import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function Footer() {
  return (
    <div className='footer'>
    <div className='icons'>
        <FacebookIcon color='primary' theme={theme} onClick={() => window.open('https://www.facebook.com/')} />&nbsp;&nbsp;&nbsp;
        
        <InstagramIcon color='primary' theme={theme} onClick={() => window.open('https://www.instagram.com/')} />&nbsp;&nbsp;&nbsp;
        <LinkedInIcon color='primary' theme={theme} onClick={() => window.open('https://www.linkedin.com')} />&nbsp;&nbsp;&nbsp;
        <TwitterIcon color='primary' theme={theme} onClick={() => window.open('https://twitter.com/')} />&nbsp;&nbsp;&nbsp;
        <YouTubeIcon color='primary' theme={theme} onClick={() => window.open('https://www.youtube.com/')} />&nbsp;&nbsp;&nbsp;
    </div>
    </div>
  );
}

export default Footer