import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'

import {ReactComponent as PinLogo} from '../../assets/pin-logo.svg';
import {ReactComponent as SlidersLogo} from '../../assets/sliders-logo.svg';
import {ReactComponent as WebsiteLogo} from '../../assets/website-logo.svg';

import material_1 from '../../assets/material-1.jpg';
import material_2 from '../../assets/material-2.png';
import material_3 from '../../assets/material-3.jpg';
import material_4 from '../../assets/material-4.jpg';


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
        <Grid container spacing={3}>
            <Grid item xs className="home-info-layer-1-grid-item">
              <PinLogo className="home-info-layer-1-logo"/>
              <div className="home-info-layer-1-logo-details">
                <h2>Title 1</h2>
                <p>
                  Wrapped text explaining title 1 in detail, long enough to wrap multiple lines.
                  Some more random text to fill it out and make it look nice,
                </p>
              </div>
            </Grid>
          <Grid item xs className="home-info-layer-1-grid-item">
            <SlidersLogo className="home-info-layer-1-logo"/>
            <div className="home-info-layer-1-logo-details">
              <h2>Title 2</h2>
              <p>
                Wrapped text explaining title 2 in detail, long enough to wrap multiple lines.
                Some more random text to fill it out and make it look nice,
              </p>
            </div>
          </Grid>
          <Grid item xs className="home-info-layer-1-grid-item">
            <WebsiteLogo className="home-info-layer-1-logo"/>
            <div className="home-info-layer-1-logo-details">
              <h2>Title 3</h2>
              <p>
                Wrapped text explaining title 3 in detail, long enough to wrap multiple lines.
                Some more random text to fill it out and make it look nice,
              </p>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="home-info-layer-2">
        <Grid container spacing={4} className="home-info-layer-2-grid">

          <Grid item xs className="home-info-layer-2-grid-item">
            <Card className="home-info-layer-2-card">
              <h2>Project Number 1</h2>
              <img src={material_1} alt="Project 1"/>
              <div className="home-info-layer-2-card-details">
                <p>
                  Here is a nicely typed out explanation of the project and Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. 
                </p>
                <a href="#">Find out more</a>
              </div>
            </Card>
          </Grid>

          <Grid item xs className="home-info-layer-2-grid-item">
            <Card className="home-info-layer-2-card">
              <h2>Project Number 2</h2>
              <img src={material_2} alt="Project 2"/>
              <div className="home-info-layer-2-card-details">
                <p>
                  Here is a nicely typed out explanation of the project and Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. 
                </p>
                <a href="#">Find out more</a>
              </div>
            </Card>
          </Grid>

          <Grid item xs className="home-info-layer-2-grid-item">
            <Card className="home-info-layer-2-card">
              <h2>Project Number 3</h2>
              <img src={material_3} alt="Project 3"/>
              <div className="home-info-layer-2-card-details">
                <p>
                  Here is a nicely typed out explanation of the project and Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. 
                </p>
                <a href="#">Find out more</a>
              </div>
            </Card>
          </Grid>

          <Grid item xs className="home-info-layer-2-grid-item">
            <Card className="home-info-layer-2-card">
              <h2>Project Number 4</h2>
              <img src={material_4} alt="Project 4"/>
              <div className="home-info-layer-2-card-details">
                <p>
                  Here is a nicely typed out explanation of the project and Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. 
                </p>
                <a href="#">Find out more</a>
              </div>
            </Card>
          </Grid>

        </Grid>
      </div>

      <div className="home-info-layer-3"></div>
    </div>
  );
}

export default Home;
