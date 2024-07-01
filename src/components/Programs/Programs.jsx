import React, { useState } from 'react'
import './Programs.css'
import program1 from '../../assets/color-grading2.jpg'
import program2 from '../../assets/cover-songs.jpg'
import program3 from '../../assets/intro.jpeg'
import program4 from '../../assets/logo.png'
import program5 from '../../assets/prewedding.jpeg'
import program6 from '../../assets/Reels-Shorts.jpeg'
import program7 from '../../assets/short-Film.jpg'
import program8 from '../../assets/video_editing.jpg'
import program9 from '../../assets/wedding2.jpg'
import program10 from '../../assets/web.png'
import program_icon_2 from '../../assets/program-icon-4.jpg'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program1} alt="" />
        <p>COLOUR-GRADING</p>
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Color grading</p>
        </div>
      </div>
      <div className="program">
        <img src={program10} alt="" />
        <p>FULL STACK WEB DEVELOPMENT</p>
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>WEBSITES</p>
        </div>
      </div>
      <div className="program">
        <img src={program4} alt="" />
        <p>LOGO DESIGNING</p>
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Logo Designing</p>
        </div>
      </div>
      <div className="program">
        <img src={program6} alt="" />
        <p>REELS &SHORTS</p>
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Reels & Shorts</p>
        </div>
      </div>
      <div className="program">
        <img src={program7} alt="" />
        <p>SHORT FILMS</p>
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Short Films</p>
        </div>
      </div>
      <div className="program">
        <img src={program8} alt="" />
        <p>GRAPHIC DESIGNING</p>
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Graphic Designing</p>
        </div>
      </div>
      <div className="program">
        <img src={program9} alt="" />
        <p>WEDDING</p>
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Wedding Reels</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
        <p>COVER-SONGS</p>
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Cover-Songs</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
