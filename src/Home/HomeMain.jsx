import React from 'react'
import profilepic from "../images/pic.png"
import instagram from "../svg/instagram.svg"
import github from "../svg/github.svg"
import x from "../svg/x.svg"

const HomeMain = () => {
  return (
    
    <div className='w-[100%] h-[85%] overflow-y-auto flex justify-center'>
    <div className='w-[1500px] px-[200px] flex justify-between items-center pb-[50px] max-[1400px]:w-[auto] max-[1400px]:px-[150px] max-[1070px]:px-[100px] max-[800px]:px-[70px] max-[700px]:px-[40px] max-[860px]:flex-col-reverse max-[860px]:justify-end max-[860px]:gap-[50px] max-[700px]:pt-[20px] max-[700px]:gap-[20px] '>

        <div className="w-[550px] text-white flex flex-col gap-[20px] max-[1250px]:w-[500px] max-[1150px]:gap-[15px] max-[1070px]:gap-[10px] max-[900px]:gap-[5px] max-[700px]:w-[auto] max-[860px]:items-center">

          <div className='text-[30px] font-[600] animate-moveDown max-[1150px]:text-[25px] max-[900px]:text-[22px] ' style={{ animationDelay: '0.4s' }}>Hello, It's Me</div>
          <div className='text-[40px] font-[600] animate-moveRight max-[1150px]:text-[33px] max-[900px]:text-[31px] ' style={{ animationDelay: '0.6s' }}>Huzaifa Aslam</div>
          <div className='text-[30px] font-[600] animate-moveUp max-[1150px]:text-[25px] max-[900px]:text-[22px]  max-[860px]:text-center' style={{ animationDelay: '0.8s' }}> <span>And I am a</span> <span className='text-[#18C2D1]'>Software Engineer</span></div>
          <div className='text-[20px] font-[400] animate-moveLeft max-[1150px]:text-[18px] max-[900px]:text-[16px] max-[860px]:text-center ' style={{ animationDelay: '1s' }}>Highly Motivated Software Engineer with a strong foundation in Frontend Development</div>

          <div className='flex gap-[20px] animate-moveLeft max-[1070px]:gap-[15px]' style={{ animationDelay: '1.2s' }}>

            <a href="https://linkedin.com/in/huzaifa-aslam-4845152aa/" className='HomeMainCircle text-[16px] text-[#18C2D1] font-[500] max-[1070px]:text-[14px]'>
              in
            </a>

            <a href="https://github.com/HuzaifaAslam99/" className='HomeMainCircle'>
              <img src={github} className='w-[20px] max-[1070px]:w-[15px]' alt="" />
            </a>

            <a href="https://x.com/huzaifaaslam99" className='HomeMainCircle'>
              <img src={x} className='w-[15px] max-[1070px]:w-[12px]' alt="" />
            </a>

            <a href="https://instagram.com/huzaifaaslam99/" className='HomeMainCircle'>
              <img src={instagram} className='w-[20px] max-[1070px]:w-[15px]' alt="" />
            </a>

          </div>

        </div>
        <img src={profilepic} className='w-[400px] animate-scaleUp max-[1150px]:w-[350px] max-[950px]:w-[330px] max-[900px]:w-[300px] max-[700px]:w-[260px] max-[350px]:w-[230px]' style={{ animationDelay: '1.4s' }} alt="" />
    </div>
    </div>
  )
}

export default HomeMain
// 