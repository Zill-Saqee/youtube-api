import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  cntnr:{
        display:"flex",justifyContent:"center"
  },
  text :{
    display: "inline-block",
    marginRight: "auto"
  }
}));

export default function Header({search,changeSearch,searchYoutubeVideos}) {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.cntnr}>
        <Typography className={classes.text} variant="h6">Youtube-Api</Typography>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            value={search}
            onChange={(e) => {changeSearch(e.target.value)}}
            placeholder="Search Your Video"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton  onClick={()=>{searchYoutubeVideos()}} className={classes.iconButton} aria-label="search">
            <SearchIcon/>
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
        </Paper>
      </Toolbar>
    </AppBar>
  );
}
