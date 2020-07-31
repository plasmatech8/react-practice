import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// Core
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
// Icons
import ShareIcon from '@material-ui/icons/Share';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CoffeeCard = (props) => {
  const classes = useStyles();

  const { title, subtitle, description, avatarSrc, imgSrc } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={avatarSrc} />
        }
        action={
          <IconButton><ShareIcon /></IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        style={{ height: "150px" }}
        image={imgSrc}
      />
      <CardContent>
        <Typography>
          asdsad{description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card >
  )
}

export default CoffeeCard
