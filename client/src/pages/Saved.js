import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root1: {
    flexGrow: 1,
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{ borderWidth: '1px', border:'solid'}}>
      <CardContent>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          Harry Potter
        </Typography>
        <Typography variant="h5" component="h2">
          The great book behind adventures
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          writen by nosequien
        </Typography>

      <div className={classes.root1}>
      <Grid container spacing={3} >
      <Grid item xs={6}>

      {/* <img src="https://images1.penguinrandomhouse.com/cover/9781644732076"alt="Girl in a jacket" style="width:200px;height:200px;"/> */}
        
      
      </Grid>
      
      <Grid item xs={6}>
     
        <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
       
      </Grid>
      </Grid>
       
     
    </div >


      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}




