import React from 'react'
import './Features.css'
import walkingman from '../img/walkingman.png'

const Features = () => {
  return (
    <div id='features' className='pt-10 bg-[#0281A7] text-white'>
        <div className='w-[90vw] mx-auto '>
            <div className='font-semibold'>
                    | WHAT WE CAN DO
            </div>

            <div className='text-6xl text-left font-black my-4 pb-8'>
                Features
            </div>

            <div className='features flex justify-between pb-12 items-center'>
                <div className='col left flex gap-6'>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <div className='card w-[28vw] bg-white text-black rounded-md pl-6 pt-6 pb-8'>
                                <div className='flex gap-4 items-center'>
                                    <div className='text-5xl font-bold text-[#6D01B6]'>01</div>
                                    <div className='text-2xl font-semibold'>Personalised<br/>chatbot</div>
                                </div>
                                <div className='pt-4 w-[90%]'>
                                    JobFitAI is completely free for job seekers. We believe in creating equal opportunities for everyone without financial constraints.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='card w-[28vw] bg-white text-black rounded-md pl-6 pt-6 pb-8'>
                                <div className='flex gap-4 items-center'>
                                    <div className='text-5xl font-bold text-[#6D01B6]'>02</div>
                                    <div className='text-2xl font-semibold'>Resume<br/>Suggestions</div>
                                </div>
                                <div className='pt-4 w-[90%]'>
                                    JobFitAI is completely free for job seekers. We believe in creating equal opportunities for everyone without financial constraints.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <div className='card w-[28vw] bg-white text-black rounded-md pl-6 pt-6 pb-8'>
                                <div className='flex gap-4 items-center'>
                                    <div className='text-5xl font-bold text-[#6D01B6]'>03</div>
                                    <div className='text-2xl font-semibold'>Searching<br/>Tailored Jobs</div>
                                </div>
                                <div className='pt-4 w-[90%]'>
                                    JobFitAI is completely free for job seekers. We believe in creating equal opportunities for everyone without financial constraints.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='card w-[28vw] bg-white text-black rounded-md pl-6 pt-6 pb-8'>
                                <div className='flex gap-4 items-center'>
                                    <div className='text-5xl font-bold text-[#6D01B6]'>04</div>
                                    <div className='text-2xl font-semibold'>Application<br/>Tracking</div>
                                </div>
                                <div className='pt-4 w-[90%]'>
                                    JobFitAI is completely free for job seekers. We believe in creating equal opportunities for everyone without financial constraints.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right'>
                    <img className='walkingman' src={walkingman} alt='Walking man'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
