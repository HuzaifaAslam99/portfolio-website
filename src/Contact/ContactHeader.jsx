import React from 'react'
import { Link } from 'react-router-dom';

const SkillsHeader = () => {
  return (
    <div className='w-[100%] h-[15%] text-[25px] flex justify-between items-center px-[150px] text-white max-[1050px]:px-[100px] max-[900px]:text-[20px] max-[800px]:px-[70px] max-[700px]:h-[80px] max-[700px]:text-[18px] max-[700px]:px-[40px] max-[600px]:justify-center max-[550px]:text-[15px]  max-[500px]:px-[20px]  '>
      <div className='font-[600] max-[600px]:hidden'>My Portfolio</div>
      <div className='flex gap-[40px] font-[600] max-[800px]:gap-[30px] max-[700px]:gap-[20px] max-[600px]:w-[100%] max-[600px]:gap-auto max-[600px]:justify-around   max-[500px]:gap-[15px] max-[400px]:gap-[10px]'>
        <Link to="/">Home</Link>
        <Link to="/Skills" >Skills</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact" className="text-[#18C2D1]">Contact</Link>
      </div>
    </div>
  )
}

export default SkillsHeader