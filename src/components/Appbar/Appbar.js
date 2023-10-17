import * as React from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import mainLogo from "../../assets/logo-utero.svg";

export default function BasicMenu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const logoStyle = {
    height: isMobile ? '80px' : '100%', 
  };
  const subTitleStyle = {
    width: isMobile ? '50%' : '100%', 
    margin:'0 auto',
  };

  return (
    <div>
      <Grid container alignItems='center'>
        <Grid item xs={12} lg={1}>
          <img src={mainLogo} alt="Claudia Gizzi: osteopata ed esperta PMA" style={logoStyle} />
        </Grid>
        <Grid item xs={12} lg={10}>
          <h1> Claudia Gizzi</h1>
          <h2 style={subTitleStyle} >Osteopata ed Esperta  in fertilit&agrave;</h2>
        </Grid>
      </Grid>
    </div>
  );
}
