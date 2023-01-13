import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import mainLogo from "../../assets/logo-utero.svg";


export default function BasicMenu() {


  return (
    <div>
      <Grid container>
            <Grid item xs={3} lg={1}>
            <img src={mainLogo} alt="osteopata ed esperta PMA" height={80} />
            </Grid>
            <Grid item xs={6} lg={10}>
              <Typography variant='h1'> dr. Claudia Gizzi</Typography>
              <Typography variant='h2'>Osteopata ed Esperta in fertilit&agrave;</Typography>
            </Grid>

      </Grid>
      
    </div>
  );
}