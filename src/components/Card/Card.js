import React from "react";
import { Box,Typography } from "@material-ui/core";
import cardList from "../../hooks/cardList";
import BoxLogo from "../../assets/box_logo.svg";


function Card() {
const cards=cardList();
	return (
   <div  className="row">
            {cards.map((card)=>(
                    <Box key={card.id}  className="detailCard"> 
                      
                      <Box><img src={BoxLogo} alt={"claudia gizzi d.o"+ card.id} /></Box>
                         <h6><b>{card?.title}</b></h6>
                         <Typography variant="body2">{card?.description}</Typography>
                    </Box>
                ))}
   </div>
	);
}

export default  Card;