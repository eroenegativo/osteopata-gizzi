import React from "react";
import {
    Grid,
    Typography
} from "@material-ui/core";
import ClaudiaGizziMobile from "../assets/claudia-gizzi-osteopata.jpg";
import ClaudiaGizzidesktop from "../assets/claudia-gizzi-desktop.jpg";
import BackButton from "../components/BackButton/BackButton";


function AboutLayout() {

    
    return (
        <Grid container margin={30}  alignItems="center">
             <Grid item xs={12} lg={12}>
           <header className="slogan-wrapper">
            <Typography variant="h3">Conoscimi Meglio</Typography>
            </header> 
            </Grid>
            <Grid item xs={12} lg={6}>
                <img src={window.innerWidth > 1024 ? ClaudiaGizzidesktop :  ClaudiaGizziMobile } alt="Claudia Gizzi- Osteopata" className="mainImage"/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Typography variant="body1">
                Mi chiamo Claudia Gizzi,ho intrapreso gli studi di Osteopatia presso L'Istituto Soma di Milano conseguendo con successo il diploma in osteopatia (durata 5 anni a tempo pieno).<br/>
                Ho conseguito poi diverse specializzazioni tra cui:<br/>
                <ul className="list-about">
                    <li>- Esercizio correttivo e posturale;</li>
                    <li>- Applicazione professionale di Taping elastico (nastri adesivi colorati ) che:
                        <ul>
                            <li>*correggono la funzione muscolare</li>
                            <li>* migliorano la circolazione di sangue e linfa.</li>
                            <li>* correggono l'allineamento articolare</li>
                            <li>* riducono il dolore.</li>
                        </ul>
                    </li>
                    <li>-Fertilità maschile e femminile (so consultare esami diagnostici/ ormonali/ spermiogramma e spermiocultura)</li>
                </ul>
                </Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
             <BackButton/>
             </Grid>
        </Grid>
	  );
}
export default AboutLayout;