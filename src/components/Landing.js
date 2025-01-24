import React from 'react'
import bookgraphic from '../img/bookgraphic.png'
import purpletick from '../img/purpletick.png'
import './Landing.css'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <div id='home' className='landing w-[90vw] mx-auto pt-10 flex pb-8'>
        <div className='left w-[70%]'>
            <div className='font-semibold'>
                | MARKET YOURSELF
            </div>

            <div className='text-6xl font-black pt-8 leading-tight'>
                Discover Your Fit, <br/>
                Redefine Your Career
            </div>

            <div className='w-[90%] my-6'>
                At JobFitAI, we believe in breaking barriers and creating opportunities for everyone. Whether you're a job seeker or an employer, our AI-powered platform is designed to bridge the gap and foster an inclusive workforce.
            </div>

            <button className='bg-[#6D01B6] text-white py-3 px-4 rounded-full font-semibold'>
                <NavLink to='/signup'>
                    Register Now &gt;
                </NavLink>
            </button>

            <div className='py-6 flex gap-x-4 gap-y-2 w-[70%] flex-wrap'>
                <div className='flex items-center gap-2'>
                    <img className='h-[16px]' src={purpletick} alt='purple tick'/>
                    <div>
                        Identify your strengths
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <img className='h-[16px]' src={purpletick} alt='purple tick'/>
                    <div>
                        Customized Job Matching
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <img className='h-[16px]' src={purpletick} alt='purple tick'/>
                    <div>
                        Empowering inclusive Employment opportunities
                    </div>
                </div>
            </div>
        </div>

        <div className='right'>
            <img className='book' src={bookgraphic} alt='book graphic'/>
        </div>
    </div>
  )
}

export default Landing
