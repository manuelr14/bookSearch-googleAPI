import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CenteredGrid from './Grid';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lx">
        <Typography component="div" style={{ margin: '30px 0px 0px 0px', border: 'solid', borderWidth:"2px", height: '35vh' }} >

        <h1 style={{ textAlign:'center'}}>
        
        (React) Google Books Search</h1>
        </Typography>
     
      </Container>
    </React.Fragment>
  );
}
{/* <Container maxWidth="sm"></Container> */}