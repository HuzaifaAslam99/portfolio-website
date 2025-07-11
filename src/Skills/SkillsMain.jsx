import React from 'react'
import html from "../images/html.png"
import css from "../images/css.png"
import tailwind from "../images/tailwind.png"
import js from "../images/js.png"
import react from "../images/react.png"
import NodeJs from "../images/nodejs.png"
import ExpressJs from "../images/express.png"
import MongoDB from "../images/mongoDB.png"





const SkillsMain = () => {
  return (
    <div className='w-[100%] h-[85%] overflow-y-auto flex justify-center pt-[70px] max-[800px]:pt-[50px]'>

      <div className='w-[1000px] h-[500px] grid grid-cols-4 grid-rows-2 justify-items-center max-[1000px]:w-[800px] max-[800px]:h-[400px]
      max-[700px]:grid-cols-3 max-[700px]:grid-rows-3 max-[700px]:w-[600px] max-[700px]:h-[600px] max-[600px]:grid-cols-2 max-[600px]:grid-rows-4 max-[600px]:h-[700px] max-[600px]:w-[400px] max-[410px]:w-[300px]'>
      
        <div className='SkillsMainBox animate-scaleUp'>
          <img src={html} className='SkillsBox' alt="" />
          HTML
        </div>

        <div className='SkillsMainBox animate-scaleUp'>
          <img src={css} className='SkillsBox'  alt="" />
          CSS
        </div>

        <div className='SkillsMainBox pt-[15px] !gap-[15px] animate-scaleUp'>
          <img src={tailwind} className='SkillsBox max-[800px]:w-[80px] max-[410px]:w-[64px]' alt="" />
          Tailwind CSS
        </div>
        {/*  max-[600px]:w-[64px] */}
        <div className='SkillsMainBox animate-scaleUp'>
          <img src={js} className='SkillsBox'  alt="" />
          JavaScript
        </div>

        <div className='SkillsMainBox animate-scaleUp'>
          <img src={react} className='SkillsBox'  alt="" />
          React
        </div>

        <div className='SkillsMainBox animate-scaleUp'>
          <img src={NodeJs} className='SkillsBox'  alt="" />
          Node Js
        </div>

        <div className='SkillsMainBox animate-scaleUp'>
          <img src={ExpressJs} className='SkillsBox'  alt="" />
          Express Js
        </div>

        <div className='SkillsMainBox animate-scaleUp'>
          <img src={MongoDB} className='SkillsBox'  alt="" />
            MongoDB
        </div>



        </div>
    </div>
  )
}

export default SkillsMain
