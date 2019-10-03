import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/Content";
import apiKey from"./apiKey";


class App extends React.Component {
  constructor(){
    super();
    this.state={
      searchKeyword:"",
      videosList:[],
      playingVideo:null,
      playingVideoDetail:null
    }
  }

  searchYoutubeVideos =async () =>{
      let q=this.state.searchKeyword;
      let query= `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=11&order=date&q=${q}&key=${apiKey}`;
      await axios.get(query)
      .then(data =>{
          this.setState(({videosList}) =>{
            return {
              videosList : data.data.items
            }
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  setSearchKeyWord = (search) => {
    this.setState(({searchKeyword}) => {
        return {searchKeyword:search}
    })
  }
  playVideo = (id) => {
    const videos=this.state.videosList;
    let videoToPlay=videos.find((video) => {
      return video.id.videoId === id
    })
     this.setState(() => {
       return {
        playingVideoDetail:videoToPlay,
        playingVideo:`https://youtu.be/${id}`
      }
     })
  }

  render() {
    const { searchKeyword,videosList,playingVideoDetail } = this.state;
    return (
      <div className="App">
          <Header searchYoutubeVideos={this.searchYoutubeVideos} changeSearch={this.setSearchKeyWord} search={searchKeyword}/>
          <Main playVideo={this.playVideo} playingVideo={this.state.playingVideo} playingVideoDetail={playingVideoDetail} videos={videosList}/>
          <Footer />
      </div>
    )
  }
}
export default App;
