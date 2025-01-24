import React from 'react'
import man from '../img/man.png'
import './About.css'

const About = () => {
  return (
    <div id='about' className='landing pt-10 bg-[#0281A7] text-white pt-32 pb-16'>
        <div className='about w-[90vw] h-fit mx-auto flex justify-between'>
            <div className='left py-12'>
                <img className='man' src={man} alt='man'/>
            </div>
            <div className='right w-[70vw] pl-[10%]'>
                <div className='font-semibold'>
                    | ABOUT JOBFIT
                </div>

                <div className='title text-7xl text-left font-black my-4'>
                    Our Journey into <br/>
                    Empowerment
                </div>

                <div className='mt-16'>
                    At JobFitAI, our journey began with a vision to transform the job market into a space where inclusivity thrives. We recognized the challenges faced by specially-abled individuals in finding meaningful employment and sought to bridge this gap through innovation and technology.
                </div>

                <div className='my-8'>
                    Starting with a simple idea, we developed an AI-driven platform that understands unique abilities and matches them with tailored opportunities. Along the way, we integrated advanced tools like chatbots for accessibility assessments, automated resume building, and seamless application processes to remove barriers.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
