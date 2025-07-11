import React from 'react'
import spotify from "../images/spotify.png"
import youtube from "../images/youtube.png"
import foodcart from "../images/foodcart.png"
import AiOrthoScanner from "../images/AiOrthoScanner.png"
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import github from "../images/github.png"
import tailwind from "../images/tailwind.png"
import react from "../images/react.png"
import NodeJs from "../images/nodejs.png"
import ExpressJs from "../images/express.png"
import MongoDB from "../images/mongoDB.png"



const ProjectsMain = () => {
    return (
        <div className='w-[100%] h-[85%] overflow-y-auto flex justify-center pt-[50px] max-[950px]:pt-[30px]'>

            <div className='w-[1200px] grid grid-cols-2 justify-items-center gap-[100px] max-[1500px]:w-[1000px] max-[1170px]:w-[900px] max-[1170px]:gap-[50px] max-[950px]:grid-cols-1'>

                 <div className='ProjectsMainBox animate-scaleUp' style={{ animationDuration: '1.5s' }}>
                    <a href="https://spotify-clone-ashy-beta.vercel.app">
                       <img src={spotify} className='ProjectScreenshot ' alt="" />
                    </a>
                    <a href="https://spotify-clone-ashy-beta.vercel.app" className='ProjectTitle '>Spotify Clone</a>
                    <div className='ProjectTitleText '>
                        This Spotify clone is a fully functional web application designed to replicate the core features of the popular music streaming platform. The application allows users to explore a curated collection of songs, click on tracks to play them instantly, and enjoy a seamless audio streaming experience
                    </div>

                    <div className='w-[100%] px-[20px] flex justify-between'>

                        <div className='flex gap-[20px]'>
                            <img src={html} className='ProjectSkills' alt="" />
                            <img src={css} className='ProjectSkills' alt="" />
                            <img src={js} className='ProjectSkills' alt="" />
                        </div>

                        <a href="https://github.com/HuzaifaAslam99/Spotify-Clone" className='ProjectsMainGithub'>
                            <img src={github} className='ProjectGithub' alt="" />
                            GitHub
                        </a>

                    </div>
                </div>

                <div className='ProjectsMainBox animate-scaleUp' style={{ animationDuration: '1.5s' }}>

                    <a href=" https://you-tube-clone-nu-three.vercel.app">
                       <img src={youtube} className='ProjectScreenshot ' alt="" />
                    </a>
                    <a href=" https://you-tube-clone-nu-three.vercel.app" className='ProjectTitle '>Youtube Clone</a>
                    
                    <div className='ProjectTitleText '>
                        This YouTube clone is a visually captivating and highly functional web application that replicates the core design and user interface of the popular video streaming platform. The clone offers a seamless browsing experience, showcasing a modern layout, responsive design, and dynamic components
                    </div>

                    <div className='w-[100%] px-[20px] flex justify-between'>

                        <div className='flex gap-[20px]'>
                            <img src={html} className='ProjectSkills' alt="" />
                            <img src={css} className='ProjectSkills' alt="" />
                            <img src={js} className='ProjectSkills' alt="" />
                        </div>

                        <a href="https://github.com/HuzaifaAslam99/YouTube-Clone" className='ProjectsMainGithub'>
                            <img src={github} className='ProjectGithub' alt="" />
                            GitHub
                        </a>

                    </div>
                </div>



                <div className='ProjectsMainBox animate-scaleUp' style={{ animationDuration: '1.5s' }}>

                    <a href="https://product-order-cart.vercel.app">
                       <img src={foodcart} className='ProjectScreenshot' alt="" />
                    </a>

                    <a href="https://product-order-cart.vercel.app" className='ProjectTitle '>Food Cart Menu</a>
                    <div className='ProjectTitleText '>
                        This project is a dynamic, single-page web application designed to simulate a food cart menu system. Users can browse through a variety of food items, add them to their virtual cart, and remove items as needed. Once the purchase is completed, the application displays a summary of the selected items, providing users with a clear overview of their purchase. The interface is user-friendly and interactive. The project is ideal for showcasing the ability to implement e-commerce features such as item selection, cart management, and order summary in a web application
                    </div>

                    <div className='w-[100%] px-[20px] flex justify-between'>

                        <div className='flex gap-[20px]'>
                            <img src={html} className='ProjectSkills' alt="" />
                            <img src={css} className='ProjectSkills' alt="" />
                            <img src={js} className='ProjectSkills' alt="" />
                        </div>

                        <a href="https://github.com/HuzaifaAslam99/Product-Order-Cart" className='ProjectsMainGithub'>
                            <img src={github} className='ProjectGithub' alt="" />
                            GitHub
                        </a>

                    </div>
                </div>



                <div className='ProjectsMainBox animate-scaleUp ' style={{ animationDuration: '1.5s' }}>

                    <a href="https://ai-ortho-scan.vercel.app/">
                       <img src={AiOrthoScanner} className='ProjectScreenshot ' alt="" />
                    </a>
                    <a href="https://ai-ortho-scan.vercel.app/" className='ProjectTitle '>AI Ortho Scanner</a>
                    <div className='ProjectTitleText '>
                        This project is a secure web application that leverages AI for analyzing medical X-ray scans. Users must sign up and log in for verification before uploading their X-ray images. Once uploaded, the AI processes the scan, providing a detailed diagnosis of the condition shown in the image. It also offers treatment recommendations based on the detected issues. The application aims to provide a reliable, AI-powered diagnostic tool for medical professionals, improving the speed and accuracy of diagnosis and treatment suggestions.
                    </div>

                    <div className='w-[100%] px-[20px] flex justify-between max-[950px]:flex-col max-[950px]:items-center max-[950px]:gap-[10px]'>

                        <div className='flex gap-[20px] items-center'>
                            <img src={react} className='ProjectSkills' alt="" />
                            <img src={tailwind} className='ProjectSkills !size-[30px] max-[1170px]:!size-[24px] max-[450px]:!size-[19px] max-[360px]:!size-[17px]' alt="" />
                            <img src={NodeJs} className='ProjectSkills !w-[60px] max-[1170px]:!w-[48px] max-[450px]:!w-[38px] max-[360px]:w-[34px]' alt="" />
                            <img src={ExpressJs} className='ProjectSkills' alt="" />
                            <img src={MongoDB} className='ProjectSkills' alt="" />


                        </div>

                        <a href="https://github.com/HuzaifaAslam99/AI-Ortho-Scan" className='ProjectsMainGithub'>
                            <img src={github} className='ProjectGithub' alt="" />
                            GitHub
                        </a>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProjectsMain


// This YouTube clone is a visually captivating and highly functional web application that replicates the core design and user interface of the popular video streaming platform. The clone offers a seamless browsing experience, showcasing a modern layout, responsive design, and dynamic components

// This project is a dynamic, single-page web application designed to simulate a food cart menu system. Users can browse through a variety of food items, add them to their virtual cart, and remove items as needed. Once the purchase is completed, the application displays a summary of the selected items, providing users with a clear overview of their purchase. The interface is user-friendly and interactive. The project is ideal for showcasing the ability to implement e-commerce features such as item selection, cart management, and order summary in a web application

{/* <img src={react} className='w-[40px]' alt="" />
<img src={tailwind} className='size-[30px]' alt="" />
<img src={NodeJs} className='w-[60px]' alt="" />
<img src={ExpressJs} className='w-[40px]' alt="" />
<img src={MongoDB} className='w-[40px]' alt="" /> */}

// This project is a secure web application that leverages AI for analyzing medical X-ray scans. Users must sign up and log in for verification before uploading their X-ray images. Once uploaded, the AI processes the scan, providing a detailed diagnosis of the condition shown in the image. It also offers treatment recommendations based on the detected issues. The application aims to provide a reliable, AI-powered diagnostic tool for medical professionals, improving the speed and accuracy of diagnosis and treatment suggestions.