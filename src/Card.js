import React, { useRef, useState, useEffect } from 'react';

import{
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Icon from '@mdi/react';

// import { drawDocument } from 'rasterizehtml';

export default ({ icon, color, num }) => {
  const classes = makeStyles(theme => ({
    border: {
      width: 50,
      border: '1px solid #66ccff'
    },
    cardBorder: {
      width: 50,
      height: 75,
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

  const sourceRef = useRef('source');
  const [url, setURL] = useState('');

  // useEffect(() => drawDocument(sourceRef.current).then(({ image }) => {
  //   let node = document.createElement('canvas');
  //   let context = node.getContext('2d');
  //   context.drawImage(image, 0, 0);
  //   setURL(node.toDataURL('image/png'));
  // }), []);

  return <div className={classes.border}>
    <Paper ref={sourceRef} className={classes.cardBorder}>
      <Typography variant="h6" className={classes.headNum}>{num}</Typography>
      {/* <Icon path={icon} color={color} size={0.6} className={classes.headIcon} /> */}
      <Icon path={icon} color={color} size={1.2} className={classes.centerIcon} />
    </Paper>
  </div>
};

