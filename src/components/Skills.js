import React from 'react';
import HTML from '../assests/html.png'
import CSS from '../assests/css.png'
import JavaScript from '../assests/javascript.png'
import ReactImg from '../assests/react.png'
import Tailwind from '../assests/tailwind.png'
import GitHub from '../assests/github.png'

const Skills = () => {
    return (
      <div name='skills' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Skills</p>
            <p className='py-4'>//These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='html icon' ></img>
            <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='html icon' ></img>
            <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='html icon' ></img>
            <p className='my-4'>JavaScript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='html icon' ></img>
            <p className='my-4'>ReactImg</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='html icon' ></img>
            <p className='my-4'>Tailwind</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt='html icon' ></img>
            <p className='my-4'>GitHub</p>
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;