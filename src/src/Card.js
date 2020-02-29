import React from 'react';

import{
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Icon from '@mdi/react';

export default ({ icon, color, num }) => {
  const classes = makeStyles(theme => ({
    cardBorder: {
      width: 50,
      height: 75,
      margin: 5,
      position: 'relative'
    },
    headIcon: {
      position: 'absolute',
      left: 30,
      top: 8
    },
    headNum: {
      position: 'absolute',
      left: 5,
      top: 3,
      fontSize: 16,
      color
    },
    centerIcon: {
      position: 'absolute',
      left: 10,
      top: 30
    }
  }))();

  return <Paper className={classes.cardBorder}>
      <Typography variant="h6" className={classes.headNum}>{num}</Typography>
      {/* <Icon path={icon} color={color} size={0.6} className={classes.headIcon} /> */}
      <Icon path={icon} color={color} size={1.2} className={classes.centerIcon} />
    </Paper>;
};

