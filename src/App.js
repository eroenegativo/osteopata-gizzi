import React from "react";
import "./stylesheet/Index.css";
import Appbar from "./components/Appbar/Appbar"
import Footer from "./components/Footer/footer";
import Router from "./components/Router";


function App() {
  return (
    <div className="App">
      <Appbar/>
      <Router/>
      <Footer />
    </div>
  );
}
export default App;
