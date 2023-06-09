import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 '>
                    LET'S BUILD SOMETHING TOGHETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#5651e5]'> Amisha </span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>A Front-End Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a front end web developer paving my way through various 
                    technologies and making the best out of it.
                    Currently I'm striving myself to being a better
                    front end developer as I keep broadening my horizon on these technologies
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'> 
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration '>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration '>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration '>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration '>
                            <BsFillPersonLinesFill />
                        </div>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main