import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import { Typography } from "@material-ui/core";

const PlayingVideo = ({ playing,playingVideoDetail }) => {
    const title = playingVideoDetail.snippet.channelTitle;
    const description = playingVideoDetail.snippet.description;
  return (
    <Fragment>
        <ReactPlayer stle={{display:"table-cell" , verticalAlign:"middle",paddingBottom:"20px"}} url={playing} controls playing />
        <Typography style={{marginTop:"20px"}} variant="h5">
                {title}
        </Typography>
        <Typography variant="caption">{description}</Typography>
    </Fragment>
  )
};
export default PlayingVideo;
