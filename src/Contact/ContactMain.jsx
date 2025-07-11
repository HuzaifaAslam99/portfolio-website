import React from 'react'
import x from "../svg/xContact.svg"


const ContactMain = () => {
    return (
        <div className='w-[100%] h-[85%] flex justify-center pt-[50px] pb-[100px] overflow-y-auto'>

            <div>
            
            <div className='w-[1000px] h-auto py-[50px] border-[5px] border-[#18C2D1] rounded-[20px] flex flex-col items-center text-[#18C2D1]  gap-[30px] animate-scaleUp max-[1150px]:w-[800px] max-[950px]:w-[700px] max-[950px]:gap-[20px] max-[950px]:py-[30px] max-[800px]:w-[500px] max-[800px]:gap-[20px] max-[550px]:w-[400px] max-[460px]:w-[350px] max-[460px]:border-[4px] max-[400px]:w-[300px]' style={{ animationDuration: '1.5s' }}>
            {/* max-[550px]:border-[3px] max-[370px]:w-[264px] max-[370px]:gap-[10px] max-[370px]:py-[20px]  */}

                <div className='text-[45px] font-[600]  max-[800px]:text-[50px] max-[460px]:text-[40px]'>Contact Me</div>
                {/* max-[550px]:text-[25px] max-[370px]:text-[20px] */}

                <div className='w-auto h-auto flex flex-col justify-between items-center gap-[30px] max-[800px]:gap-[20px]'>
                {/* max-[370px]:gap-[10px] */}

                    <div className='ContactRow '>
                        <span className='ContactTitle'>Linkedin Profile</span>
                        <div className='ContactNameBox '>
                            <div className='ContactNameCircle '>
                                in
                            </div>
                        </div>
                    </div>

                    <div className='ContactRow'>
                        <span className='ContactTitle'>X Account</span>
                        <div className='ContactNameBox'>
                            <div className='ContactNameCircle'>
                                <img src={x} className='w-[20px]' alt="" />
                                {/* max-[550px]:w-[10px] max-[370px]:w-[8px] */}
                            </div>
                        </div>
                    </div>


                    <div className='ContactRow'>
                        <span className='ContactTitle'>Email Address</span>
                        <div className='ContactNameBox '>
                           huzaifaaslam322@gmail.com
                        </div>
                    </div>


                    <div className='ContactRow'>
                        <span className='ContactTitle'>Phone Number</span>
                        <div className='ContactNameBox max-[460px]:!text-[15px]'>
                           +92 336 0777378
                        </div>
                    </div>



                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactMain
