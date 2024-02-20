import { useState, Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import Examples from "./components/Examples/Examples.jsx";


function App() {


  return (
    <Fragment>
      <Header />
      <main>
      <CoreConcepts />
      <Examples />   
      </main>
    </Fragment>
  );
}

export default App;
