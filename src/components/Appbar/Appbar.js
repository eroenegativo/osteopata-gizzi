import * as React from 'react';
import { Grid} from '@material-ui/core';
import mainLogo from "../../assets/logo-utero.svg";


export default function BasicMenu() {


  return (
    <div>
      <Grid container>
            <Grid item xs={3} lg={1}>
            <img src={mainLogo} alt="Claudia Gizzi:osteopata ed esperta PMA" height={80} />
            </Grid>
            <Grid item xs={6} lg={10}>
              <h1> Claudia Gizzi</h1>
              <h2>Osteopata ed Esperta in fertilit&agrave;</h2>
            </Grid>
      </Grid>
      
    </div>
  );
}