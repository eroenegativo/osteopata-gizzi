import React from "react";
import logo from "../../assets/logo-utero.svg";
import { Typography } from "@material-ui/core";

function Footer() {

      
	return (
   <footer>
    <div className="row">
        <svg  xmlns="http://www.w3.org/2000/svg" fill="#fcb7bd" viewBox="0 -1 1000 100" > 
            <path  fill="#fff" d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path> 
            <path fill="#fcd4d7" d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path> 
            <path fill="#fcb7bd" d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path> 
        </svg>
    </div>
    <div style={{ backgroundColor:"#fcb7bd"}}>
    <div className="row">
        <Typography variant="h6">INFORMAZIONI </Typography>
        </div>
    <div className="row">
        <div className="box-wrapper">
            <Typography variant="h6">D.O. CLAUDIA GIZZI ESPERTA IN FERITILITÀ</Typography>
            <img src={logo} alt="osteopata ed esperta PMA" height={120}/>
        </div>
        <div className="box-wrapper">
            <div>
            <Typography variant="h6">SEDE LEGALE</Typography>
            <Typography variant="body2">Via Nicola Paganini 17, Milano 20131</Typography>
            </div>
            <div>
                <Typography variant="body2"><b>P.IVA:</b>12427820969</Typography><br/>
                <Typography variant="body2"><b>C.F.:</b>GZZCLD85R65F205Q</Typography>
            </div>
        </div>
        <div className="box-wrapper">
            <Typography variant="h6">CONTATTI</Typography>
            <div>
            <Typography variant="body2"><b>TELEFONO:</b><a href="+393427886135" alt="chiamami">+393427886135</a></Typography><br/>
            <Typography variant="body2"><b>EMAIL:</b><a href="mailto:osteopataclaudiagizzi@gmail.com"   target="_blank"  alt="scrivimi" rel="noreferrer">osteopataclaudiagizzi@gmail.com</a></Typography><br/>
            {/* <Typography variant="body2"><b>PEC:</b> <a  href="mailto:robertamorandi@pec.it"  target="_blank" alt="scrivimi" rel="noreferrer">rtamorandi@pec.it</a></Typography> */}
            </div>
        </div>
        {/* <div>
            <h4>DATI LEGALI</h4>
        </div> */}
    </div>
    <div className="row">
    <div className="credit"> Designed by <a href="mailto:ilaria.posca@gmail.com" target="_blank" rel="noreferrer">Ilaria Olimpia Posca</a> 2022</div>
    </div>
    </div>
    

   </footer>
	);
}

export default  Footer;
