import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import InfoGrid from '../InfoGrid';
import Projects from '../Projects';


import officer_image from '../../assets/officer.png';

import './Home.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: '#d32f2f',
    margin: '0px',
    zIndex: 5,
  },
  title: {
    flexGrow: 1,
  },
  buttonPadding: {
      padding: '0px 1rem 0px 1rem',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '18rem',
    textAlign: 'center',
  },
}));


function Home() {
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" classes={{root : classes.appBar}}>
        <Toolbar>
          <Button className={classes.buttonPadding} edge="start" color="inherit">Home</Button>
          <Button className={classes.buttonPadding} color="inherit">Officers</Button>
          <Button className={classes.buttonPadding} color="inherit">Projects</Button>
          <Button className={classes.buttonPadding} color="inherit">About</Button>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Button color="inherit">Filler</Button>
        </Toolbar>
      </AppBar>
      <div className="home-intro">
          <h1>Smart Campus</h1>
          <h3>Filler text about Smart Campus</h3>
      </div>

      <div className="home-info-layer-1">
        <InfoGrid />
      </div>

      <div className="home-info-layer-2">
        <Projects />
      </div>
      
      <div className="home-info-layer-3"></div>
    </div>
  );
}

export default Home;
