import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Grid from "./components/Grid";
// import Container from "./components/Container";
import Saved from "./pages/Saved"

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {

  return (
    <div>

      <NavBar />
      <Container maxWidth="md" style={{ borderWidth: '1px', border:'solid', marginBottom:'30px' }}>
        <Typography component="div"  >

          <h1 style={{ textAlign: 'center' }}>(React) Google Books Search</h1>
          <h3 style={{ textAlign: 'center' }}>Search for and Save Books of interests</h3>
        
        </Typography>
      </Container>

      <Container maxWidth="md" style={{ borderWidth: '1px', border:'solid' }}>
        <Typography>
        <h3 style={{ textAlign: 'left' }}>Saved Books</h3>

        </Typography>
        <Saved />
      </Container>

    </div>




  );
}


export default App;
