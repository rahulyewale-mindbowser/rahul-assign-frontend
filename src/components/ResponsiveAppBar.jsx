import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import icon from '../assets/icon.png'


export default function ResponsiveAppBar() {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
    
    {
      isMobile?

      <AppBar  position="sticky" style={{display:'flex',backgroundColor: "white",top:'1.5rem'}}>
        <Toolbar style={{justifyContent:'space-between',minHeight:'3rem'}} >
        <img src={icon} alt="logo" />
        <MenuIcon style={{color:'black'}} />
        </Toolbar>
      </AppBar>
      :<Box sx={{ flexGrow: 1,pl:"10%",pr:"10%" }}>
      <AppBar
        position="relative"
        sx={{ backgroundColor: "white", color: "black",boxShadow:0 ,mt:5}}
      >
        <Toolbar >
        <Typography   sx={{ flexGrow: 1 ,fontSize:"8%"}}>
        <img src={icon} alt="icon" width='20%' height='20%' />
          </Typography>
          
          <Typography  fontSize={'1rem'} fontWeight={600} sx={{ flexGrow: 1 }}>
            Laptops
          </Typography>
          <Typography   fontSize={'1rem'} fontWeight={600}  sx={{ flexGrow: 1 }}>
            Desktop PCs
          </Typography>
          <Typography fontSize={'1rem'} fontWeight={600}  sx={{ flexGrow: 1 }}>
            Networking Devices
          </Typography>
          <Typography fontSize={'1rem'} fontWeight={600}  sx={{ flexGrow: 1 }}>
            Printers & Scanners
          </Typography>
          <Typography fontSize={'1rem'} fontWeight={600}   sx={{ flexGrow: 1 }}>
            PC Parts
          </Typography>
          <Typography  fontSize={'1rem'} fontWeight={600}  sx={{ flexGrow: 1 }}>
            All Other Products
          </Typography>
          <Typography fontSize={'1rem'} fontWeight={600}   sx={{ flexGrow: 1 }}>
            Repairs
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    }
    </>
  );
}
