import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";


function BackButton() {
    const navigate = useNavigate();

    return (
        <Button className="back-cta" onClick={() => navigate(-1)}> &lt; Back</Button>	
	  );
}
export default BackButton;