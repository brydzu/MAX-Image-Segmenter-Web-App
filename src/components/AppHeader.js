import React from 'react'
import '../styles/AppHeader.css'

const AppHeader = props => { 
  return (
    <div className="titleBanner">
      <span className="titleText">
        <u><b>MAX</b> Image Segmenter</u>  Magic Cropping Tool
      </span>
    </div>
  )
}

export default AppHeader