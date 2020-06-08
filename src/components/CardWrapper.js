import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ImageComp from './ImageComp.js';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({image,title,caption,description}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <ImageComp src = {image}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {caption}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
              <ImageComp src = {image}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {caption}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>

    </Card>
  );
}
