import React, { useState } from 'react';

import {
  Button,
  TextField,
  Paper,
  Typography
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
      margin: 4,
      papdding: 0 
    },
    cardBorder: {
      width: 100,
      height: 150
    },
    headIcon: {
      position: 'absolute',
      left: 20,
      top: 40
    },
    headNum: {
      position: 'absolute',
      left: 25,
      top: 15
    }
  }))();

  // <Icon path={mdiCardsSpade} color='#333' />
  // <Icon path={mdiCardsClub} color='#333' />
  // <Icon path={mdiCardsDiamond} color='#936' />
  // <Icon path={mdiCardsHeart} color='#936' />

  return <div className={classes.root}>
    <Paper className={classes.cardBorder}>
      <Typography variant="h6" className={classes.headNum}>{'A'}</Typography>
      <Icon path={mdiCardsSpade} color='#333' size={1} className={classes.headIcon} />
    </Paper>
  </div>;
};

