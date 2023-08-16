import React from 'react'
import videoBg from '../../assets/videoBg.mp4'
import './video.css'

const Video = () => {
  return (
    <div className='main'>
        <video src={ videoBg } autoPlay loop/>
    </div>
  )
}

export default Video