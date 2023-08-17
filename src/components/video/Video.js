import React, { useRef, useState, useEffect } from 'react'
import videoBg from '../../assets/videoBg.mp4'
import './video.css'

const Video = () => {
  const videoRef = useRef(null) // create a ref for the video element
  const [playing, setPlaying] = useState(false) // create a state for the playing state

  // create a function that toggles the playing state and calls the play or pause methods of the video element
  const handlePlayPauseToggle = () => {
    setPlaying(!playing)
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  // use the useEffect hook to update the display property of the button element whenever the playing state changes
  useEffect(() => {
    const button = document.querySelector(".play-button") // select the button element
    if (playing) {
    //   button.style.display = "none" // hide the button when playing
    } else {
      button.style.opacity = '"block"' // show the button when paused
    }
  }, [playing])

  // use another useEffect hook to update the playing state and the button element when the video element ends
  useEffect(() => {
    const video = videoRef.current // get the video element from the ref
    const button = document.querySelector(".play-button") // select the button element
    // add an event listener for the ended event of the video element
    video.addEventListener("ended", () => {
      setPlaying(false) // set the playing state to false when the video ends
      button.style.display = "block" // show the button when the video ends
    })
  }, [])

  return (
    <div className='main'>
        <video src={ videoBg } ref={videoRef} playsInline /> 
        <button onClick={handlePlayPauseToggle} className="play-button">{playing ? "Pause" : "Play"}</button>
    </div>
  )
}

export default Video
