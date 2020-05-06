import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Mylist, Mylistitem } from "../components/List";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import GoogleApi from '../utils/GoogleAPI';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        color: theme.palette.text.secondary,
    }

}));

export default function SimpleCard(props) {
    const classes = useStyles();


    return (
        <div>


                            <Card className={classes.root} style={{ borderWidth: '1px', border: 'solid', marginBottom: '10px' }}>

                                <CardContent>

                                    <CardActions style={{ textAlign: 'right' }}>
                                        <Button size="small">View</Button>
                                        <Button size="small">Delete</Button>
                                    </CardActions>

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

                            </Card>
                        )
                    })}
                
          

        </div>
    )

}




