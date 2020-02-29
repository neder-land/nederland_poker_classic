import React, { useState } from 'react';
import {
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
        <TextField variant='outlined' value='test' />
      </Grid>
      <Grid item xs={3}>
        <TextField variant='outlined' value='test' />
      </Grid>
      <Grid item xs={3}>
        <TextField variant='outlined' value='test' />
      </Grid>
      <Grid item xs={3}>
        <TextField variant='outlined' value='test' />
      </Grid>
    </Grid>
  </div>;
};

