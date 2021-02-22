import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <video id="player" controls>
        <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4"></source>
        <track label="English" kind="descriptions" srcLang="en"></track>
        Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
)
export default Video
