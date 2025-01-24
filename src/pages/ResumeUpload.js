import React from 'react'
import scenicplants from '../img/scenicplants.png'
import file from '../img/file.png'
import { NavLink } from 'react-router-dom'

const ResumeUpload = () => {
  return (
    <div className='min-h-[100vh] flex justify-center items-center' style={{backgroundImage: `url(${scenicplants})`}}>
        <div className='w-[90%] mt-[-10%] mx-auto rounded-2xl bg-[#F4F4F4] shadow-lg shadow-grey-800 py-12'>
            <div className='bg-[#0281A7] rounded-2xl py-6 text-white text-center font-extrabold text-3xl'>Upload Your Resume</div>
            <div className='flex flex-col justify-center items-center h-[100%] gap-10'>
                <form className='text-center'>
                    <div className='p-12 bg-[#FFFFFF] shadow-lg shadow-grey-800 w-[80%] mx-auto rounded-3xl mt-12'>
                        <img className='w-fit mx-auto py-4' src={file} alt='file-icon'/>
                        <input className='ml-[10%] pb-2' type='file'/>
                        <p className='text-2xl font-medium py-4'>Drag & Drop</p>
                        <p className='text-sm'>Your files here or Browse to Upload</p>
                        <p className='font-semibold text-[#6D01B6]'>Only PDF format with max size of 100MB</p>
                        <button className='mt-8 bg-[#6D01B6] w-[100%] text-white font-semibold py-4 px-6 rounded-lg'>
                            <NavLink to='/jobdetails'>Save File &gt;</NavLink>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default ResumeUpload
