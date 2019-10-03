import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minHeight:"285.5px"
  },
});

export default function Video({video,playVideo}) {
  const classes = useStyles();
  const description = video.snippet.description;

  return (
    <Card onClick={() => {playVideo(video.id.videoId)}} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={video.snippet.thumbnails.high.url}
          title="Contemplative Reptile"
        />
        <CardContent  style={{maxHeight:"100px",textOverflow:"ellipses",paddingBottom:"30px"}}>
          <Typography gutterBottom variant="h5" component="h2">
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description.length > 80 ? description.substring(0,80)+"...." : description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
