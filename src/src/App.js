import React, { useState } from 'react';

import {
  Grid,
  Button,
  TextField,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import {
  mdiCardsSpade,
  mdiCardsClub,
  mdiCardsDiamond,
  mdiCardsHeart
} from '@mdi/js';
import Icon from '@mdi/react';

export default () => {
  const classes = makeStyles(theme => ({
    root: {
      width: '100%',
      height: '100%',
      margin: 16,
      papdding: 0 
    }
  }))();

  return <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Paper>
          <Icon path={mdiCardsSpade} color='#333' />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          <Icon path={mdiCardsClub} color='#333' />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          <Icon path={mdiCardsDiamond} color='#936' />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          <Icon path={mdiCardsHeart} color='#936' />
        </Paper>
      </Grid>
    </Grid>
  </div>;
};

