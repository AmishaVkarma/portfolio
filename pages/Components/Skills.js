import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 pt-96 pb-20'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
          </p>
        <h2 className='py-4'>EXPERTISE</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                    src='/../public/assets/HTML.png'
                    width='64' 
                    height='64' 
                    alt='HTML'
                    />
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                    src='/../public/assets/CSS.png'
                    width='64' 
                    height='64' 
                    alt='CSS'
                    />
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <h3>CSS</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                    src='/../public/assets/JavaScript.png'
                    width='64' 
                    height='64' 
                    alt='JS'
                    />
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <h3>JavaScript</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                    src='/../public/assets/Tailwinnd.jpg'
                    width='64' 
                    height='64' 
                    alt='Tailwindcss'
                    />
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <h3>Tailwind</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                    src='/../public/assets/React.png'
                    width='64' 
                    height='64' 
                    alt='ReactJS'
                    />
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <h3>ReactJS</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                    src='/../public/assets/GH.png'
                    width='64' 
                    height='64' 
                    alt='GITHUB'
                    />
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <h3>GitHub</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                    src='/../public/assets/Tableau.png'
                    width='64' 
                    height='64' 
                    alt='Tableau'
                    />
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <h3>Tableau</h3>
                </div>
            </div>
            </div> <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                    src='/../public/assets/R.png'
                    width='64' 
                    height='64' 
                    alt='R'
                    />
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <h3>R language</h3>
                </div>
            </div>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Skills