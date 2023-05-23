import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../Components/Projects/Instagram.png';
import Facebook from '../Components/Projects/Facebook.png';
import Udemy from '../Components/Projects/Udemy.png';
import pinterest from '../Components/Projects/Pinterest.png'

import Projectitem from './Projectitem';


const Projects = () => {
  return (
    <div id='projects' className='w-full md:h-screen p-2 flex items-center pl-48 pt-72'>
        <div className='max-w-[1240px] mx--auto px-2 py-16 '>
         <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Projects
        </p>
         <h2 className='py-4'>What I've Build</h2> 
         <div className='grid md:grid-cols-2 gap-8'>
             <Projectitem 
             title='Instagram' 
             backgroundImg={Instagram} 
             ProjectUrl='/Instagram' 
             /> 
             <Projectitem 
             title='Facebook' 
             backgroundImg={Facebook} 
             ProjectUrl='/Instagram' 
             /> 
             <Projectitem 
             title='Udemy' 
             backgroundImg={Udemy} 
             ProjectUrl='/Instagram' 
             /> 
             <Projectitem 
             title='Pinterest' 
             backgroundImg={pinterest} 
             ProjectUrl='/Instagram' 
             /> 
         </div>
        </div>
    </div>
  )
}

export default Projects