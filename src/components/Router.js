

import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomeLayout from "../layout/Homepage";
import AboutLayout from "../layout/AboutLayout";
import OsteoLayout from "../layout/Osteopatia";
import PMALayout from "../layout/PMA";



function Navbar() {
      
	return (
        <Router>
        <Routes> 
            <Route exact path="/" element={<HomeLayout/>}/>
            <Route path="/conoscimi-meglio" element={<AboutLayout/>}/>
            <Route path="/osteopatia" element={<OsteoLayout />}/>
            <Route path="/osteopatia-pma" element={<PMALayout />}/>

        </Routes>
        </Router>
	);
}

export default  Navbar;
