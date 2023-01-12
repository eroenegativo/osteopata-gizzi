import PMA from "../assets/rivoluzione-PMA.jpeg";
import Card from "../components/Card/Card";
import Osteopatia from "../assets/osteopatia.jpg";
import OsteoPma from "../assets/pma.jpg";
const mainContentList = () => {
	const values = [
		{
			align:"right",
			variant:"h3",
			altText: "Claudia Gizzi Osteopata",
			subtitle:"Osteopata ed Esperta PMA",
			title: "Conoscimi Meglio",
			id: "about",
			description: "Sono Claudia Gizzi e ti aiutero' a migliorare la tua QUALITÀ di VITA promuovendo il tuo equilibrio psico-fisico grazie all' osteopatia. ",
			btnText: "conoscimi meglio",
			xs: "12",
			lg: "6",
		},
		{
			align:"left",
			variant:"h3",
			title: "A chi è rivolta l'osteopatia?",
			src:Osteopatia,
			altText: "Osteopatia,per la cura  quotidiana",
			id: "osteo",
			btnText: "Scopri L'osteopatia",
			description: "L'osteopatia mira a migliorare la salute e il benessere psico-fisico di ogni iindividuo.",
			xs: "12",
			lg: "6",
			
		},
		{
			align:"right",
			variant:"h3",
			src:OsteoPma,
			altText:" Come l'osteopatia vi aiuta durante il percorso PMA",
			title: "L'osteopatia e la PMA",
			id: "healthcare",
			description: "L'osteopatia può aiutare la tua fertilità, può preparare al meglio entrambi i partner accompagnandoli nella ricerca di una gravidanza",
			btnText: "Percorso PMA",
			xs: "12",
			lg: "6",
			
		},
		{
			align:"center",
			variant:"h3",
            title: "Perchè affidarti a me",
			id: "entrust",
			description: "Definiremo insieme il tuo percorso di cura, se necessario mi avvarrò del supporto dei migliori specialisti in ambito medico",
			xs: "12",
			lg: "12",
			backgroundColor:"#c1c1c1",
			component:<Card />,
		},
        {
			align:"center",
			src:PMA,
			altText: "Un Sostegno per la tua Fertilità",
			title: "Un Sostegno per la tua Fertilità",
			variant:"h3",
			id: "contact",
			description: "Non esitare a contattarmi, capiremo insieme in una prima telefonata  gratuita se posso aiutarti nela risoluzione del tuo problema. Il consulto non comporta alcun impegno",
			xs: "12",
			lg: "6",
		},
	];
	return values;
};
export default mainContentList;
