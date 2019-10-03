import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Video from "./card";
import PlayingVideo from "./playingVideo";

const styles = {
  paper: {
    padding: "20px",
    margin: "10px 10px",
    height: "70vh",
    overflowY: "auto",
    backgroundColor: "blue"
  },
  playing: {
    margin: "10px 10px",
    height: "70vh",
    paddingTop:"20px",
    paddingBottom:"20px",
    display:"table",
    overflowY: "auto",
    backgroundColor: "blue",
    verticalAlign:"center"
  }
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { videos, playingVideo, playVideo , playingVideoDetail } = this.props;
    return (
      <Grid container style={{ marginTop: "65px" }} spacing={1}>
        <Grid item xs={12} sm={12} lg={6}>
          <Paper style={styles.paper}>
            <Grid
              style={{ height: "100%", justifyContent: "center" }}
              container
              spacing={1}
            >
              {videos.length > 0 ? (
                videos.map(video => (
                  <Grid key={video.id.videoId} item xs={12} sm={6} lg={6}>
                    <Video playVideo={playVideo} video={video} />
                  </Grid>
                ))
              ) : (
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%"
                  }}
                  item
                  sm
                >
                  <Typography variant="body1">
                    No Videos In Playlist.Search whatever you want...
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Grid>
        <Grid style={{minHeight:"75vh"}} item xs={12} sm={12} lg={6}>
          {!playingVideo ? (
            <Paper style={styles.paper}>
              <Typography variant="h5">Welcome!</Typography>
              <Typography variant="caption">Please select a video from Playlist</Typography>
            </Paper>
          ) : (
            <Paper style={styles.playing}>
                <PlayingVideo playingVideoDetail={playingVideoDetail} playing={playingVideo} />
            </Paper>
          )}
        </Grid>
      </Grid>
    );
  }
}
export default Main;
