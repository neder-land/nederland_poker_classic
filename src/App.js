import React from 'react';

import { makeStyles } from '@material-ui/styles';

import {
  mdiCardsSpade,
  mdiCardsClub,
  mdiCardsDiamond,
  mdiCardsHeart,
  mdiStar
} from '@mdi/js';
import Card from './Card';
import CardSpec from './CardSpec';

export default () => {
  const classes = makeStyles(theme => ({
    root: {
      width: '100%',
      margin: 4,
      padding: 0
    }
  }))();

  return <div className={classes.root}>
    {[
      { icon: mdiCardsSpade, color: '#333' },
      { icon: mdiCardsClub, color: '#333' },
      { icon: mdiCardsDiamond, color: '#936' },
      { icon: mdiCardsHeart, color: '#936' }
    ].map(({icon, color}) => (['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].map(num => <Card icon={icon} color={color} num={num} />))).reduce((arr, next) => ([...arr, next]), [])}
    {['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].map(num => <Card icon={mdiStar} color='#993' num={num} />)}
    <CardSpec icon='👴' color='#933' num='Joker' />
    <CardSpec icon='👴' color='#333' num='Joker' />
  </div>;
};

