import React from "react";
import { Grid, Typography } from "@material-ui/core";
import OsteoPMA from "../assets/pma.jpg";
import OneofMany from "../assets/oneofmani-1-libro.jpg";
import BackButton from "../components/BackButton/BackButton";

function PMALayout() {
  return (
    <Grid container margin={30} alignItems="center">
      <Grid item xs={12} lg={12}>
        <header className="slogan-wrapper">
          <Typography variant="h3">Osteopatia e PMA</Typography>
        </header>
      </Grid>
      <Grid item xs={12} lg={6}>
        <img
          src={OsteoPMA}
          alt="L'osteopatia e come supporta il vostro percorso PMA"
          className="mainImage"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h3"> Quando il bambino non arriva</Typography>
        <Typography variant="body1">
          Si può parlare di infertilità se non si riesce a concepire entro i 12
          mesi per donne d'età inferiore ai 37 anni, mentre il cut-off superata
          tale età si abbassa a 6 mesi di tentativi vani.
          <br />
          Che cosa fare se ci si trova in tale situazione?
          <br />
          Rivolgersi in primis a medici specializzati.
          <br />
          È importante anche interpellare l'osteopata poichè permette a ogni
          organo di funzionare al massimo delle proprie funzionalità.
          <br />
          Una difficoltà nel concepire può essere dovuta anche a cause
          MECCANICHE a cui non avremmo mai pensato.
          <br />
          Vediamo insieme qualche esempio delle più comuni disfunzioni che si
          riscontrano nella coppia sub-fertile.
          <br />
          L'utero non' è un organo sospeso nel vuoto: è dotato di un importante
          apparato legamentoso.
          <br />
          È sempre necessario che quest'ultimo non risulti nè accorciato nè
          stirato, per garantire a utero/tube/ovaie una corretta possibilit&agrave; di
          muovimento, indispensabile perch&egrave; avvenga l'impianto dell'embrione.
          <br />
          Soffri di stitichezza, colon irritabile o di irregolarita intestinale?
          <br />
          Un intestino congestionato può gravare, per entrambi i partner, sul
          pavimento pelvico e alterare la funzionalità degli organi sessuali.
          <br />
          Un trauma cranico può alterare le fisiologiche secrezioni dell'ipofisi
          con conseguente squilibrio ormonale.
          <br />
          In ultimo anche una postura scorretta, alterando la distribuzione
          della pressione e della vascolarizzazione può rendere più difficoltoso
          il concepimento.
          <br />
        </Typography>
      </Grid>
      {window.innerWidth > 1024 ? (
        <React.Fragment>
          <Grid item xs={12} lg={6}>
            <Typography variant="h3"> ONE OF MANY</Typography>
            <Typography variant="body1">
              Faccio parte del "One of Many's Team " : un equipe di specialisti
              a tua disposizione, un approccio multidisciplinare alla fertilità
       
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
          <a
                href="https://www.oneofmany.it/"
                rel="noreferrer" 
                target="_blank"
                alt="One of Many's Team n equipe di specialisti
                a tua disposizione, un approccio multidisciplinare alla fertilità"
              >
            <img
              src={OneofMany}
              alt="One of Many's Team:L'osteopatia supporta il vostro percorso PMA"
              className="mainImage"
            />
           </a>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid item xs={12} lg={6}>
            <img
              src={OneofMany}
              alt="L'osteopatia e come supporta il vostro percorso PMA"
              className="mainImage"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h3"> ONE OF MANY</Typography>
            <Typography variant="body1">
              Faccio parte del "One of Many's Team " : un equipe di specialisti
              a tua disposizione, un approccio multidisciplinare alla fertilità
              <br />
              Puoi trovare maggiori informazioni sul&nbsp;
              <a
                href="https://www.oneofmany.it/"
                rel="noreferrer" 
                target="_blank"
                alt="One of Many- progetto fotografico iniziato frequentando le sale d'attesa nei centri sulla fertilità"
              >
                <u>sito</u>
              </a>
            </Typography>
          </Grid>
        </React.Fragment>
      )}

      <Grid item xs={12} lg={12}>
        <BackButton />
      </Grid>
    </Grid>
  );
}
export default PMALayout;
