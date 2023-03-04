import React from "react";
import { Grid, Typography } from "@material-ui/core";
import LazyLoad from "react-lazyload";
import Osteopatia from "../assets/osteopatia.jpg";
import BackButton from "../components/BackButton/BackButton";

function OsteoLayout() {
  return (
    <Grid container margin={30} alignItems="center">
      <Grid item xs={12} lg={12}>
        <header className="slogan-wrapper">
          <h3>Osteopatia</h3>
        </header>
      </Grid>
      <Grid item xs={12} lg={6}>
        <LazyLoad height={150} offset={100}>
          <img
            src={Osteopatia}
            alt="Claudia Gizzi- Osteopata"
            className="mainImage"
          />
        </LazyLoad>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="body1">
          L'osteopatia non è solo cura ma anche prevenzione, nota
          prevalentemente per risolvere sindromi dolorose muscolo-scheletriche
          quali: cervicalgia, lombalgia, spalla dolorosa, problematiche
          articolari e posturali.
          <br /> Presenta solide evidenze scientifiche per alleviare disturbi:
        </Typography>
        <Typography variant="body1">
          <ul>
            <li>
              <Typography variant="body1">*Gastrici (Reflusso);</Typography>
            </li>
            <li>
              <Typography variant="body1">
                *Intestinali (colite spastica/ transito irregolare);
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                *Cefalea/Emicrania/Sinusite/Nevralgia;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                *Disturbi del sonno e psicosomatici;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                *Sintomatologie vagali: aritmie, nausea e vertigini
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                *Disturbi mestruali e ginecologici: amennorea, dismenorrea,
                endometriosi, cistite.
              </Typography>
            </li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BackButton />
      </Grid>
    </Grid>
  );
}
export default OsteoLayout;
