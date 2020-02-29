import React, { useState } from 'react';

import {
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import {
  mdiCardsSpade,
  mdiCardsClub,
  mdiCardsDiamond,
  mdiCardsHeart
} from '@mdi/js';
import Card from './Card';

export default () => {
  const classes = makeStyles(theme => ({
    root: {
      width: '100%',
      height: '100%',
      margin: 4,
      padding: 0 
    }
  }))();

  return <div className={classes.root}>
    <Grid container>
      {[
        { icon: mdiCardsSpade, color: '#333' },
        { icon: mdiCardsClub, color: '#333' },
        { icon: mdiCardsDiamond, color: '#936' },
        { icon: mdiCardsHeart, color: '#936' }
      ].map(({icon, color}) => (['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].map(num => <Grid item md={2}>
          <Card icon={icon} color={color} num={num} />
        </Grid>))).reduce((arr, next) => ([...arr, next]), [])}
    </Grid>
  </div>;
};

