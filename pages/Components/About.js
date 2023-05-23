import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'> 
        <div className='max-w-[1240px] m-auto md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am just an ordinary programmer </p>
                <p className='py-2 text-gray-600'>
                I gained practical exposure to technologies and their use during my freshman year.
                It gradually gained my attraction and led to further discovery in this field. 
                I started with C language as a stepping stone to my career, venturing as it goes C++, and so on. 
                Life is never easy as we think it to be, so I finally had to choose a particular specialization. 
                </p>
                <p className='py-2 text-gray-600'> 
                Found myself attracted to the vast horizon of front-end web development, 
                and here I am developing my portfolio. Everything takes time to take a hold of, 
                so spent ample time meddling, learning technologies related to 
                front-end web development to have a good foundation to the buildings I am gonna build on this platform.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.
                </p>
          
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
              <img className='rounded-xl' src='https://www.coventry.ac.uk/globalassets/media/global/00-new-course-imagery/engineering-environment-and-computing/ug/computer-science.jpg' alt='Laptop'></img>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About