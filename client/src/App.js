import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Grid from "./components/Grid";
import Container from "./components/Container"

function App(){

    return (
      <div>
  
      <NavBar/>
      <Container>
        {/* <Grid/> */}
        <h1> (React) Google Books Search</h1>
        </Container>
      
      </div>
      
        


    );
  }


export default App;
